const { login, register, logout, postResource, getResource, deleteResource, updateResource, getSession, postSession, updateSession, deleteSession, registerTeacher, approveOrRejectTeacher, getModules, getLevels, getTable, getOneResource, getOneSession } = require('../controllers/auth')

const {Router} = require("express")
const { loginValidation, registerValidation } = require('../validators/auth')
const { validationMiddleware } = require('../middlewares/validators-middleware')
const {adminAuth} = require('../middlewares/auth-middleware')
// const { registerTeacher } = require('../controllers/registerTeacher');
// const { approveOrRejectTeacher } = require('../controllers/adminController');


const router = Router()

router.get('/get-resource', getResource)

router.get('/get-resource/:id', getOneResource)

router.get('/get-table', getTable)

router.get('/get-modules', getModules)

router.get('/get-levels', getLevels)

router.post('/post-resource', validationMiddleware,postResource)

router.put('/delete-resource/:id', deleteResource)

router.put('/update-resource/:id', updateResource)

router.get('/get-session', getSession)

router.get('/get-session/:id', getOneSession)

router.post('/post-session', validationMiddleware, postSession)

router.put('/update-session/:id', updateSession)

router.put('/delete-session/:id', deleteSession)

router.post('/register', registerValidation, validationMiddleware, register)

router.post('/login', loginValidation, validationMiddleware, login)

router.get('/logout', logout)

router.post('/registerteacher' ,validationMiddleware,registerTeacher);

router.put('/admin/approveteacher/:teacher_id',registerTeacher, approveOrRejectTeacher);






module.exports = router