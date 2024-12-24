const passport = require('passport')
const {Strategy} = require("passport-jwt")
const {SECRET} = require('../constants')
const db = require('../db')

const cookieExtractor = function (req) {
    let token = null
    if (req && req.cookies) token = req.cookies['token'] // if the cookie in the name token is equal to the token then return it
    return token
}

const opts = {
    secretOrKey : SECRET,
    jwtFromRequest : cookieExtractor,
}


passport.use(
    new Strategy(opts, async({users_id }, done)=>{
        try {
            const { rows } = await db.query("SELECT users_id, users_email, users_role FROM users WHERE users_id = $1", [users_id])

            if(!rows.length){
                throw new Error('401 not authorized')
            }

            // Determine isAdmin based on role_id
            // const isAdmin = rows[0].role_id === 1;

            let user = {
                users_id: rows[0].users_id,
                users_email: rows[0].users_email,
                // isAdmin: isAdmin  // Attach isAdmin property
            }

            return await done(null, user)
        } catch (error) {
            console.log(error.message)      
            done(null, false)
        }
    })
)