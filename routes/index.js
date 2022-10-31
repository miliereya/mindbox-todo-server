const userController = require('../controllers/user-controller')
const { body } = require('express-validator')
const authMiddleware = require('../middlewares/auth-middleware')

const Router = require('express').Router
const router = new Router

//users
router.post('/user/registration', 
    body('email').isEmail(),
    body('password').isLength({ min: 6, max: 24 }),
userController.registration)


router.post('/user/login', userController.login)
router.post('/user/logout', userController.logout)
router.post('/user/refresh', userController.refresh)
router.post('/user/update', authMiddleware, userController.updateTodos)


module.exports = router