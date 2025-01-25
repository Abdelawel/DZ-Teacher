const express = require('express')
const cookieParser = require('cookie-parser')
const { CLIENT_URL,SERVER_PORT, VERCEL_URL } = require('./constants')
// const passport = require('passport')
const authRoutes = require('./routes/auth')
const cors = require('cors')
const initializeDatabase = require('./setup')
const serverless = require('serverless-http');
// const paymentRoutes = require('./routes/paymentRoutes');




// require('./middlewares/passport-middleware')
const app = express()

// const allowedOrigins = process.env.NODE_ENV === 'production' ? VERCEL_URL : CLIENT_URL;
// app.use('/api/payment', paymentRoutes);


const allowedOrigins = [
    'https://educatedz.vercel.app', // Add your frontend URL
    'https://dz-te4cher-backend.vercel.app', // Add your backend URL (if necessary)
    'http://localhost:3000', // For local development
  ];
  
  // CORS configuration
  const corsOptions = {
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true); // Allow the request
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true, // Allow cookies and authorization headers
  };

// app.use(cors({ origin : 'http://localhost:3000' , credentials : true}))
app.use(cors(corsOptions))

app.use(express.json())
app.use(cookieParser())
// app.use(passport.initialize())

app.use('/api', authRoutes)

// initializeDatabase()
//   .then(() => console.log('Database initialized'))
//   .catch((err) => console.error('Database initialization failed:', err));





// const appStart = () =>{
//     try {
//     app.listen(SERVER_PORT, ()=>{
//     console.log(`server running on ${SERVER_PORT}`)
//        })
//     } catch (error) {
//         console.log(error)
//     }
// }

// appStart()


module.exports = app;
module.exports.handler = serverless(app); // Required for Vercel