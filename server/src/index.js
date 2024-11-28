const cookieParser = require('cookie-parser')
const { CLIENT_URL, } = require('./constants')
// const passport = require('passport')
const authRoutes = require('./routes/auth')
const cors = require('cors')


// require('./middlewares/passport-middleware')

app.use(cors({ origin : CLIENT_URL , credentials : true}))

app.use(express.json())
app.use(cookieParser())
// app.use(passport.initialize())

app.use('/api', authRoutes)




const appStart = () =>{
    try {
    app.listen(8000, ()=>{
    console.log(`server running on 8000`)
       })
    } catch (error) {
        console.log(error)
    }
}

appStart()