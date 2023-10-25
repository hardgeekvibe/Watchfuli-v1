const router = require('express').Router()
const authRoutes = require('./authRoutes')
const adminRoutes = require('./adminRoutes')
const messageRoutes = require('./messageRoutes')
const appRoutes = require('./appRoutes')
const reportRoutes = require('./reportRoutes')

router.use('/auth', authRoutes)
router.use('/admin', adminRoutes)
router.use('/message', messageRoutes)
router.use('/app', appRoutes)
router.use('report', reportRoutes)

module.exports = router