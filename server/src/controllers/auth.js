const db = require ('../db')
const {hash} = require('bcryptjs')
const {sign} = require('jsonwebtoken')
const {SECRET} = require('../constants')

///////////////////////////////////////// Resource ///////////////////////////////////////////////////
exports.getResource = async (req, res)=>{
  try {
    const {rows} = await db.query('select * from resource')
    return res.status(200).json({
      data : {
        resource : rows
      }
    })
  } catch (error) {
    return res.status(500).json({
      error : error.message,
  })
  }
}

exports.postResource = async (req, res)=>{
  try {
    
    const isModule = await db.query('select * from module where module_id = $1', [req.body.resource_module])
    if(isModule.rows.length === 0 ){
      return res.status(404).json({error : 'no such module exist'})
    }

    const isTeacher = await db.query('select * from users where users_id = $1 and users_role = 2', [req.body.uploaded_by])
    if(isTeacher.rows.length === 0 ){
      return res.status(404).json({error : 'no such teacher exist'})
    }

    
    const result = await db.query('insert into resource (resource_title, resource_description, pdf_link, resource_module, resource_price, uploaded_by, resource_status) values ($1,$2,$3,$4,$5,$6,$7) returning *', [
      req.body.resource_title,
      req.body.resource_description,
      req.body.pdf_link,
      req.body.resource_module,
      req.body.resource_price,
      req.body.uploaded_by,
      req.body.resource_status
    ])
    return res.status(201).json({
      success: true,
      data :{
        resource : result.rows[0],
      }
    })
  } catch (error) {
    return res.status(500).json({
      error : error.message,
  })
  }
}

exports.updateResource = async (req,res) => {
  try {
    const result = await db.query('update resource set resource_title = $1, resource_description = $2, pdf_link = $3, resource_module = $4, resource_price = $5 where resource_id = $6 returning *;', [
      req.body.resource_title,
      req.body.resource_description,
      req.body.pdf_link,
      req.body.resource_module,
      req.body.resource_price,
      req.params.id
    ])

    return res.status(200).json({
      data :{
        resource : result.rows[0],
      }
    })
  } catch (error) {
    return res.status(500).json({
      error : error.message,
  })
  }
}

exports.deleteResource = async (req,res) => {
  try {
    const result = await db.query('update resource set resource_status = 2 where resource_id = $1  returning *;', [req.params.id])
    // console.log(req.params.id)
    return res.status(200).json({
      data :{
        resource : result.rows[0],
      }
    })

  } catch (error) {
    return res.status(500).json({
      error : error.message,
  })
  }
}

///////////////////////////////////////// Session ///////////////////////////////////////////////////

exports.getSession = async (req,res) => {
  try {
    const {rows} = await db.query(`select * from session `)
    return res.status(200).json({
      data : {
        session : rows
      }
    })
  } catch (error) {
    return res.status(500).json({
      error : error.message,
  })
  }
}

exports.postSession = async (req,res) =>{
  try {
    const isModule = await db.query('select * from module where module_id = $1', [req.body.resource_module])
    if(isModule.rows.length === 0 ){
      return res.status(404).json({error : 'no such module exist'})
    }

    const isTeacher = await db.query('select * from users where users_id = $1 and users_role = 2', [req.body.uploaded_by])
    if(isTeacher.rows.length === 0 ){
      return res.status(404).json({error : 'no such teacher exist'})
    }

    const result = await db.query(`insert into session
                                  (session_title, session_description, session_attempt, session_price, session_module, session_status, session_teacher, session_date, session_duration) 
                                  values ($1, $2, $3, $4, $5, 1, $6, $7, $8, 0) returning *`, [
                                  req.body.session_title, 
                                  req.body.session_description, 
                                  req.body.session_attempt,
                                  req.body.session_price, 
                                  req.body.session_module, 
                                  req.body.session_teacher, 
                                  req.body.session_date, 
                                  req.body.session_duration
                                  ])
    return res.status(201).json({
      success: true,
      data :{
        resource : result.rows[0],
      }
    })
  } catch (error) {
    return res.status(500).json({
      error : error.message,
  })
  }
}

exports.updateSession = async (req, res) =>{
  try {
    const result = await db.query(`update session set 
                                  session_title = $1, session_description = $2, session_attempt = $3, session_price = $4, session_module = $5, session_status = $6, session_date = $7, session_duration = $8, session_number_student = $9 where session_id = $10 returning *`, [
                                    req.body.session_title, 
                                    req.body.session_description, 
                                    req.body.session_attempt, 
                                    req.body.session_price, 
                                    req.body.session_module, 
                                    req.body.session_status, 
                                    req.body.session_date, 
                                    req.body.session_duration,
                                    req.body.session_number_student, 
                                    req.params.id
                                  ])
    return res.status(200).json({
      data :{
        session : result.rows[0],
      }
    })
  } catch (error) {
    return res.status(500).json({
      error : error.message,
  })
  }
}

exports.deleteSession = async (req, res) => {
  try {
    const result = await db.query(`update sesssion set session_status = 3 where session_id = $1`, [req.params.id])
    return res.status(200).json({
      data :{
        resource : result.rows[0],
      }
    })
  } catch (error) {
    return res.status(500).json({
      error : error.message,
  })
  }
}

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
      id: users.users_id,
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


