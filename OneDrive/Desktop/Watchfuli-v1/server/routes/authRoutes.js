const router = require('express').Router()
const controllers = require('../controllers')

router.route('/login/manager').post(controllers.loginManager)
router.route('/logout/manager').post(controllers.logoutManager)
router.route('/login/bht').post(controllers.loginBHT)

module.exports = router