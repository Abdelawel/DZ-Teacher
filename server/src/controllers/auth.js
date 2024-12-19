const db = require ('../db')
const {hash} = require('bcryptjs')
const {sign} = require('jsonwebtoken')
const {SECRET} = require('../constants')
const jwt = require('jsonwebtoken');



exports.register = async (req, res) => {
    // const { email, password } = req.body
    try {
      const hashedPassword = await hash(req.body.users_password, 10)
  
      await db.query('insert into users(users_name,users_firstname,users_email,users_password,users_role,users_date_of_birth,users_address,users_phone,users_image_link) values ($1 , $2, $3, $4, $5, $6, $7, $8, $9)', [
        req.body.users_name,
        req.body.users_firstname,
        req.body.users_email,
        hashedPassword,
        req.body.users_role,
        req.body.users_date_of_birth,
        req.body.users_address,
        req.body.users_phone,
        req.body.users_image_link

      ])
  
      return res.status(201).json({
        success: true,
        message: 'The registraion was succefull',
      })
    } catch (error) {
      console.log(error.message)
      return res.status(500).json({
        error: error.message,
      })
    }
}


exports.login = async (req, res) => {
    let users = req.users
  
    let payload = {
      id: users.user_id,
      email: users.users_email,
      role: users.users_role
    }
  
    try {
      const token = await sign(payload, SECRET)
  
      return res.status(200).cookie('token', token, { httpOnly: true }).json({
        token: token,
        message: 'Logged in succefully',
        payload: payload
      })
    } catch (error) {
      console.log(error.message)
      return res.status(500).json({
        error: error.message,
      })
    }
  }


  exports.logout = async (req, res) =>{
    try {
        return res.status(200).clearCookie('token', {httpOnly : true}).json({
            success: true,
            message: 'logged out succesfuly'
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error : error.message,
        })
    }
}

exports.registerTeacher = async (req, res) => {
  const { teacher_name, teacher_firstname, teacher_email, teacher_password, cv_link, teacher_date_of_birth, teacher_address, teacher_phone } = req.body;

  try {
    
      const hashedPassword = await bcrypt.hash(teacher_password, 10);

      const result = await db.query(
          `INSERT INTO inscription (teacher_name, teacher_firstname, teacher_email, teacher_password, cv_link, teacher_date_of_birth, teacher_address, teacher_phone)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING teacher_id`,
          [teacher_name, teacher_firstname, teacher_email, hashedPassword, cv_link, teacher_date_of_birth, teacher_address, teacher_phone]
      );

      // res.status(201).json({ message: 'Registration request submitted', teacher_id: result.rows[0].teacher_id });
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error submitting registration request' });
  }
};

exports.approveOrRejectTeacher = async (req, res) => {
  const { teacher_id } = req.params;
  const { action } = req.body;

  try {
      if (action === 'approve') {
          await db.query('BEGIN');

          const teacher = await db.query('SELECT * FROM inscription WHERE teacher_id = $1', [teacher_id]);

          if (teacher.rows.length === 0) {
              await db.query('ROLLBACK');
              return res.status(404).json({ error: 'Teacher not found' });
          }

          const { teacher_name, teacher_firstname, teacher_email, teacher_password, teacher_date_of_birth, teacher_address, teacher_phone, cv_link } = teacher.rows[0];

          const result = await db.query(
              `INSERT INTO users (users_name, users_firstname, users_email, users_password, users_role, users_date_of_birth, users_address, users_phone)
               VALUES ($1, $2, $3, $4, 2, $5, $6, $7) RETURNING users_id`,
              [teacher_name, teacher_firstname, teacher_email, teacher_password, teacher_date_of_birth, teacher_address, teacher_phone]
          );

          const user_id = result.rows[0].users_id;
          await db.query('INSERT INTO cv (cv_link, teacher_cv) VALUES ($1, $2)', [cv_link, user_id]);

          await db.query('DELETE FROM inscription WHERE teacher_id = $1', [teacher_id]);

          await db.query('COMMIT');

          res.status(200).json({ message: 'Teacher approved and added to users table' });
      } else if (action === 'reject') {
          await db.query('DELETE FROM inscription WHERE teacher_id = $1', [teacher_id]);
          res.status(200).json({ message: 'Teacher registration request rejected' });
      } else {
          res.status(400).json({ error: 'Invalid action' });
      }
  } catch (error) {
      console.error(error);
      await db.query('ROLLBACK');
      res.status(500).json({ error: 'Error processing request' });
  }
};