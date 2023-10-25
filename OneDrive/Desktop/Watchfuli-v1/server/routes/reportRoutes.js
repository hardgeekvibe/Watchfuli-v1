const router = require('express').Router()
const controllers = require('../controllers')

router.route('/create').get(controllers.createReport)

module.exports = router