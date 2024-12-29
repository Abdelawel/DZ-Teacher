const { login, register, logout, postResource, getResource, deleteResource, updateResource } = require('../controllers/auth')

const {Router} = require("express")
const { loginValidation, registerValidation } = require('../validators/auth')
const { validationMiddleware } = require('../middlewares/validators-middleware')
const { registerTeacher } = require('../controllers/teacherController');
const { approveOrRejectTeacher } = require('../controllers/adminController');
const { getUserProfile, updateUserProfile } = require('../controllers/userController');



const router = Router()

router.get('/get-resource', getResource)

router.post('/post-resource', validationMiddleware,postResource)

router.put('/delete-resource/:id', deleteResource)

router.put('/update-resource/:id', updateResource)

router.post('/register', registerValidation, validationMiddleware, register)

router.post('/login', loginValidation, validationMiddleware, login)

router.get('/logout', logout)

router.post('/registerteacher' ,validationMiddleware,registerTeacher);

router.put('/admin/approveteacher/:teacher_id',registerTeacher, adminAuth, approveOrRejectTeacher);

router.get('/:id', getUserProfile);

router.put('/:id', updateUserProfile);







module.exports = router