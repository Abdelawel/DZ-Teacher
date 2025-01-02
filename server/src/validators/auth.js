const {check} = require('express-validator')
const db = require('../db')
const {compare} = require("bcryptjs");
const { registerTeacher } = require('../controllers/auth');

const users_password = check("users_password")
  .isLength({ min: 6, max: 15 })
  .withMessage(" password has to be between 6 and 15 char");

  const teacher_password = check("teacher_password")
  .isLength({ min: 6, max: 15 })
  .withMessage(" password has to be between 6 and 15 char");

//the email employe
const users_email = check("users_email")
  .isEmail()
  .withMessage("plz provide a valid email");

const teacher_email = check("teacher_email")
  .isEmail()
  .withMessage("plz provide a valid email");

  


//check if email exists

const emailExists = check('users_password').custom( async (value) => {
    const {rows} = await db.query("select * from users WHERE users_email = $1", [value])

    if(rows.length){
        throw new Error('Email already exist')
    }
})

const mailExists = check('_password').custom( async (value) => {
    const {rows} = await db.query("select * from inscription WHERE teacher_email = $1", [value])

    if(rows.length){
        throw new Error('Email already exist')
    }
})

const loginFieldsCheck = check('users_email').custom( async (value, {req}) => {

    // console.log(value)
    const user = await db.query("select * from users WHERE users_email = $1", [value])
    console.log(user)
    
    if(!user.rows.length){
        // console.log("eeeee")
        throw new Error("email doesn't exist")
    }

    const validPassword = await compare(req.body.users_password, user.rows[0].users_password)
    if (!validPassword){
        throw new Error("wrong password")   
    }
    req.users = user.rows[0] //for the next function .... login()
    console.log(req.employe)
})


module.exports = {
    registerValidation : [users_email, users_password, emailExists],
    registerTeacherValidation : [teacher_email, teacher_password, mailExists],

    loginValidation : [loginFieldsCheck]
     
    
}