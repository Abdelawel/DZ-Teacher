const express = require('express')
const cookieParser = require('cookie-parser')
const { CLIENT_URL,SERVER_PORT } = require('./constants')
// const passport = require('passport')
const authRoutes = require('./routes/auth')
const cors = require('cors')


// require('./middlewares/passport-middleware')
const app = express()

app.use(cors({ origin : CLIENT_URL , credentials : true}))

app.use(express.json())
app.use(cookieParser())
// app.use(passport.initialize())

app.use('/api', authRoutes)




const appStart = () =>{
    try {
    app.listen(SERVER_PORT, ()=>{
    console.log(`server running on ${SERVER_PORT}`)
       })
    } catch (error) {
        console.log(error)
    }
}

appStart()