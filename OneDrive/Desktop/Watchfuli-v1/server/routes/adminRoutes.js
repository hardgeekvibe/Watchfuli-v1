const router = require('express').Router()
const controllers = require('../controllers')

router.route('/login').post(controllers.loginAdmin)
router.route('/find/manager').post(controllers.findManager)
router.route('/create/manager').post(controllers.createManager)
router.route('/update/manager').post(controllers.updateManager)
router.route('/delete/manager').post(controllers.deleteManager)
router.route('/create/bht').post(controllers.createBHT)
router.route('/submit/ticket').post(controllers.submitTicket)

module.exports = router