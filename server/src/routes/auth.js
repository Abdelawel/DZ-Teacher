const { login, register, logout, postResource, getResource, deleteResource, updateResource, getSession, postSession, updateSession, deleteSession } = require('../controllers/auth')

const {Router} = require("express")
const { loginValidation, registerValidation } = require('../validators/auth')
const { validationMiddleware } = require('../middlewares/validators-middleware')

const router = Router()

router.get('/get-resource', getResource)

router.post('/post-resource', validationMiddleware,postResource)

router.put('/delete-resource/:id', deleteResource)

router.put('/update-resource/:id', updateResource)

router.get('/get-session', getSession)

router.post('/post-session', validationMiddleware, postSession)

router.put('/update-session/:id', updateSession)

router.put('/delete-session/:id', deleteSession)

router.post('/register', registerValidation, validationMiddleware, register)

router.post('/login', loginValidation, validationMiddleware, login)

router.get('/logout', logout)



module.exports = router