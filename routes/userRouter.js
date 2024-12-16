const Router = require('express')
const router = new Router()
const UserController = require('../controllers/userContoller')
const userContoller = require('../controllers/userContoller')



router.post('/registration', userContoller.registration)
router.post('/login', userContoller.login)
router.get('/auth', userContoller.check)



module.exports = router


