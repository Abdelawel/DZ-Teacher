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