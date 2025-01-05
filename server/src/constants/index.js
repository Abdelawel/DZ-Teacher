const {config} = require('dotenv')
config()

module.exports = {
    PORT : process.env.PORT,
    SERVER_URL : process.env.SERVER_URL,
    CLIENT_URL : process.env.CLIENT_URL,
    SERVER_PORT : process.env.SERVER_PORT,
    SECRET : process.env.SECRET,
    VERCEL_URL : process.env.VERCEL_URL
}