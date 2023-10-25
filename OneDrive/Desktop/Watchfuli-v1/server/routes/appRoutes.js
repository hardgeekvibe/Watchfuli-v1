const router = require('express').Router()
const controllers = require('../controllers')

router.route('/directory').get(controllers.getDirect)

module.exports = router