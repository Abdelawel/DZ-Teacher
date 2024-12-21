const { login, register, logout } = require('../controllers/auth')

const {Router} = require("express")
const { loginValidation, registerValidation } = require('../validators/auth')
const { validationMiddleware } = require('../middlewares/validators-middleware')

const router = Router()


router.post('/register', registerValidation, validationMiddleware, register)

router.post('/login', loginValidation, validationMiddleware, login)

router.get('/logout', logout)



module.exports = router