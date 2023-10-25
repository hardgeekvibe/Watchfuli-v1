const Manager = require('../db/models/Manager/Manager')
const MGRTask = require("../db/models/Manager/MGRTask")
const MGRMessage = require("../db/models/Manager/MGRMessage")
const BHT = require('../db/models/BHT/BHT')
// const Admin = require('../db/models/Admin/Admin')
// const Ticket = require('../db/models/Admin/Ticket')
const bcrypt = require('bcryptjs')
const passport = require('passport')

module.exports = {
    loginManager: (req, res, next) => {
        passport.authenticate('manager', (err, user) => {
            if (err) {
                console.log('Login failed!', err)
                return res.json({ message: 'Login failed!' })
            }
            if (user.user === false) {
                return res.json(user)
            } else {
                // console.log('GOOD', user)
                // res.json({ message: 'Successful login' }) //<<<<TESTING
                req.login(user, (err) => {
                    if (err) {
                        res.status(202).json({ message: 'Session save went bad.' })
                        return
                    }
                    Manager.findById({ _id: user._id })
                        .populate({ path: "tasks", path: "messages" })
                        .select('-createdAt -updatedAt -__v -password -phoneNum -email')
                        .exec()
                        .then(user => {
                            res.status(200).json({ errors: false, message: 'Manager logged in.', user })
                        })
                        .catch(err => console.log(err))
                })
            }
        })(req, res, next)
    },
    logoutManager: (req, res) => {
        req.logout(err => {
            if (err) {
                console.log(err)
            }
            res.json({ message: 'Manager is logged out.' })
        })
    },
    loginBHT: (req, res, next) => {
        passport.authenticate('bht', (err, user) => {
            if (err) {
                console.log('Login failed!', err)
                return res.json({message : 'Login failed!'})
            }
            if (user.user == false) {
                return res.json(user)
            } else {
                req.login(user, (err) => {
                    if (err) {
                        return res.status(202).json({message : 'Session save went bad.'})
                    }
                    BHT.findById({_id : user._id})
                    .populate({ path : 'tasks', path : 'messages'})
                    .select('-createdAt -updatedAt -__v -password -phoneNum -email')
                    .exec()
                    .then(user => {
                        res.status(200).json({ errors : false, message : 'BHT logged in.', user})
                    })
                    .catch(err => console.log(err))
                })
            }
        })(req, res, next)
    }
}