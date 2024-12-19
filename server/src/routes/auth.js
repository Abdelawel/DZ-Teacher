const { login, register, logout } = require('../controllers/auth')

const {Router} = require("express")
const { loginValidation, registerValidation } = require('../validators/auth')
const { validationMiddleware } = require('../middlewares/validators-middleware')
const { registerTeacher } = require('../controllers/teacherController');
const { approveOrRejectTeacher } = require('../controllers/adminController');


const router = Router()


router.post('/register', registerValidation, validationMiddleware, register)

router.post('/login', loginValidation, validationMiddleware, login)

router.get('/logout', logout)

router.post('/registerteacher' ,validationMiddleware,registerTeacher);

router.put('/admin/approveteacher/:teacher_id',registerTeacher, adminAuth, approveOrRejectTeacher);






module.exports = router