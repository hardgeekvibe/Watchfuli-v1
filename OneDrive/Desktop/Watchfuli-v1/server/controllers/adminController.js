const Admin = require('../db/models/Admin/Admin')
const Ticket = require('../db/models/Admin/Ticket')
const Manager = require('../db/models/Manager/Manager')
const MGRMessage = require('../db/models/Manager/MGRMessage')
const MGRTask = require('../db/models/Manager/MGRTask')
const BHT = require('../db/models/BHT/BHT')
const BHTMessage = require('../db/models/BHT/BHTMessage')
const BHTTask = require('../db/models/BHT/BHTTask')
const bcrypt = require('bcryptjs')
const passport = require('passport')

module.exports = {
    loginAdmin: (req, res, next) => {
        console.log('???', req.body)
        passport.authenticate('admin', (err, user) => {
            if (err) {
                return res.json(user)
            }
            if (user.user === false) {
                return res.json(user)
            } else {
                req.login(user, (err) => {
                    if (err) {
                        res.status(202).json({ message: 'Session save went bad.' })
                        return
                    }
                    Admin.findOne({ _id: user._id })
                        // .populate({path : 'tickets'})
                        // .select('-password')
                        // .exec()
                        .then(admin => {
                            res.status(200).json({ error: false, message: 'Admin logged in.', admin })
                        })
                        .catch(err => console.log(err))
                })
            }
        })(req, res, next)
    },
    createManager: (req, res) => {
        // console.log('BACK', req.body)
        let { firstName, lastName, employeeId, phoneNum, email, password1, password2 } = req.body
        let manager = Object.assign({}, { firstName, lastName, employeeId, phoneNum, email })
        if (password1 !== password2) {
            return res.json({ message: 'Passwords do not match.' })
        }
        Manager.findOne({ email })
            .then(data => {
                if (!data) {
                    BHT.findOne({ email })
                        .then(data => {
                            if (!data) {
                                manager.email = email
                                Manager.findOne({ phoneNum })
                                    .then(data => {
                                        if (!data) {
                                            BHT.findOne({ phoneNum })
                                                .then(data => {
                                                    if (!data) {
                                                        manager.phoneNum = phoneNum
                                                        manager.password = bcrypt.hashSync(password1, 10)
                                                        let newManager = new Manager(manager)
                                                        newManager.save()
                                                            .then(user => {
                                                                return res.status(200).json({ message: 'Manager has been created.', user })
                                                            })
                                                            .catch(err => console.log(err))
                                                    } else {
                                                        console.log('FIND BHT PHONE', data)
                                                        return res.json({ message: `${phoneNum} is already in the database.` })
                                                    }
                                                })
                                        } else {
                                            console.log('FIND MANAGER PHONE', data)
                                            return res.json({ message: `${phoneNum} is already in the database.` })
                                        }
                                    })
                            } else {
                                console.log('FIND BHT EMAIL', data)
                                return res.json({ message: `${email} is already in the database.` })
                            }
                        })
                } else {
                    console.log('FIND MANAGER EMAIL', data)
                    return res.json({ message: `${email} is already in the database.` })
                }
            })
            .catch(err => console.log(err))
    },
    findManager: (req, res) => {
        let { email, employeeId } = req.body
        if (employeeId == undefined) {
            Manager.findOne({ email })
                .select('-tasks -messages -createdAt -updatedAt -__v')
                .exec()
                .then(manager => {
                    if (!manager) {
                        return res.status(202).json({ message: `${email} is not in the database.` })
                    } else {
                        return res.status(200).json({ errors: false, message: 'Found Manager.', manager })
                    }
                }).catch(err => console.log(err))
        } else {
            Manager.findOne({ employeeId })
                .select('-tasks -messages -createdAt -updatedAt -__v')
                .exec()
                .then(manager => {
                    if (!manager) {
                        return res.status(202).json({ message: `${employeeId} is not in the database.` })
                    } else {
                        return res.status(200).json({ errors: false, message: 'Found Manager.', manager })
                    }
                })
        }
    },
    updateManager: (req, res) => {
        // console.log('INCOMING', req.body)
        let { password1, password2, firstName, lastName, email, phoneNum, edit_id } = req.body
        let user = Object.assign({}, { firstName, lastName, email, phoneNum })
        if (password1 !== password2) {
            return res.json({ message: 'Password do not match.' })
        }
        Manager.findById({ _id: edit_id })
            .then(manager => {
                if (password1 == '') {

                } else {
                    let check = bcrypt.compareSync(password1, manager.password)
                    if (!check) {
                        user.password = bcrypt.hashSync(password1, 10)
                        user.message = `Manager ${manager.firstName} ${manager.lastName}'s password has been changed to ${password1}.`
                    }
                }

                if (email !== manager.email) {
                    Manager.findOne({ email })
                        .then(data => {
                            if (!data) {
                                if (user.message !== '') {
                                    user.message = `${user.message} And their email has changed from ${manager.email} to ${email}.`
                                } else {
                                    user.message = `Manager ${manager.firstName} ${manager.lastName}'s email has changed from ${manager.email} to ${email}.`
                                }
                                user.email = email
                            } else {
                                return res.json({ message: `${email} is already registered. Please use another email.` })
                            }
                        })
                        .catch(err => console.log(err))
                }
                if (phoneNum !== manager.phoneNum) {
                    Manager.findOne({ phoneNum })
                        .then(data => {
                            if (!data) {
                                if (user.message !== '') {
                                    user.message = `${user.message} And their phone number has changed from ${manager.phoneNum} to ${phoneNum}.`
                                } else {
                                    user.message = `Manager ${manager.firstName} ${manager.lastName}'s phone number has changed from ${manager.phoneNum} to ${phoneNum}.`
                                }
                                user.phoneNum = phoneNum
                            } else {
                                return res.json({ message: `${phoneNum} is already registered. Please use another phone number.` })
                            }
                        })
                        .catch(err => console.log(err))
                }
            })
            .catch(err => console.log(err))

        Manager.findByIdAndUpdate({ _id: edit_id }, user, { new: true })
            .populate({ path: "tasks", path: "messages" })
            .select('-password')
            .exec()
            .then(data => {
                user.employeeId = data.employeeId
                return res.status(200).json({ errors: false, message: `Manager updated.`, user })
            })
            .catch(err => console.log(err))
    },
    deleteManager: (req, res) => {
        // console.log('INCOMING', req.body)
        let { _id } = req.body
        Manager.findByIdAndDelete({ _id })
            .then(data => {
                console.log('DELETE', data)
                data.tasks.forEach(task => {
                    MGRTask.findByIdAndDelete({ _id: task })
                        .then(data)
                        .catch(err => console.log(err))
                })
                data.messages.forEach(message => {
                    MGRMessage.findByIdAndDelete({ _id: message })
                        .then(data)
                        .catch(err => console.log(err))
                })
                return res.json({ errors: false, message: `Manager ${data.firstName} ${data.lastName} has been deleted.` })
            })
            .catch(err => console.log(err))
    },
    createBHT: (req, res) => {
        // console.log('INCOMING', req.body)
        let { firstName, lastName, employeeId, phoneNum, email, password1, password2 } = req.body
        let bht = Object.assign({}, { firstName, lastName, employeeId, phoneNum, email })
        if (password1 !== password2) {
            return res.json({ message: 'Passwords do not match.' })
        }

        Manager.findOne({ email })
            .then(data => {
                if (!data) {
                    BHT.findOne({ email })
                        .then(data => {
                            if (!data) {
                                bht.email = email
                                Manager.findOne({ phoneNum })
                                    .then(data => {
                                        if (!data) {
                                            BHT.findOne({ phoneNum })
                                                .then(data => {
                                                    if (!data) {
                                                        bht.phoneNum = phoneNum
                                                        bht.password = bcrypt.hashSync(password1, 10)
                                                        let newBHT = new BHT(bht)
                                                        newBHT.save()
                                                            .then(user => {
                                                                return res.status(200).json({ message: 'BHT has been created.', user })
                                                            })
                                                            .catch(err => console.log(err))
                                                    } else {
                                                        console.log('FIND BHT PHONE', data)
                                                        return res.json({ message: `${phoneNum} is already in the database.` })
                                                    }
                                                })
                                        } else {
                                            console.log('FIND MANAGER PHONE', data)
                                            return res.json({ message: `${phoneNum} is already in the database.` })
                                        }
                                    })
                            } else {
                                console.log('FIND BHT EMAIL', data)
                                return res.json({ message: `${email} is already in the database.` })
                            }
                        })
                } else {
                    console.log('FIND MANAGER EMAIL', data)
                    return res.json({ message: `${email} is already in the database.` })
                }
            })
            .catch(err => console.log(err))
    },
    submitTicket: (req, res) => {
        let { ticket, urgency, senderId, senderName, ticketNumber } = req.body
        let addTicket = {ticket, urgency, senderId, senderName, ticketNumber}
        let newTicket = new Ticket(addTicket)
        newTicket.save()
            .then(data => {
                Admin.findOneAndUpdate({ adminId: 'admin' }, { $push: { 'tickets': data._id } }, { new: true })
                    .then(data => {
                        return res.json({ errors: false, message: `Tech Support Ticket #${ticketNumber} has been created.` })
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }
}