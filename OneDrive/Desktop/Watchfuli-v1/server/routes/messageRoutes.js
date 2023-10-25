const router = require('express').Router()
const controllers = require('../controllers')

router.route('/find').post(controllers.findRecipient)
router.route('/send').post(controllers.addDM)
router.route('/delete').post(controllers.deleteDM)

module.exports = router