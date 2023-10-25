const BHT = require('../db/models/BHT/BHT')
const Manager = require('../db/models/Manager/Manager')
const BHTMessage = require('../db/models/BHT/BHTMessage')
const MGRMessage = require('../db/models/Manager/MGRMessage')

module.exports = {
    findRecipient: (req, res) => {
        let { email, employeeId } = req.body
        if (employeeId == undefined) {
            Manager.findOne({ email })
                .select('-tasks -messages -createdAt -updatedAt -__v -password -phoneNum -role -employeeId -email')
                .exec()
                .then(user => {
                    // console.log('MANAGER', user)
                    if (!user) {
                        BHT.findOne({ email })
                            .select('-tasks -messages -createdAt -updatedAt -__v -password -phoneNum -role -employeeId -email')
                            .exec()
                            .then(user => {
                                // console.log('BHT', user)
                                if (!user) {
                                    return res.json({ message: `${email} is not in the database.` })
                                } else {
                                    // console.log('FOUND USER', user)
                                    return res.json({ errors: false, message: 'Recipient found.', user })
                                }
                            })
                            .catch(err => console.log(err))
                    } else {
                        return res.json({ errors: false, message: 'Recipient found.', user })
                    }
                })
                .catch(err => console.log(err))
        } else {
            Manager.findOne({ employeeId })
                .select('-tasks -messages -createdAt -updatedAt -__v -password -phoneNum -role -employeeId -email')
                .exec()
                .then(user => {
                    if (!user) {
                        BHT.findOne({ employeeId })
                            .select('-tasks -messages -createdAt -updatedAt -__v -password -phoneNum -role -employeeId -email')
                            .exec()
                            .then(user => {
                                if (!user) {
                                    return res.json({ message: `${employeeId} is not in the database.` })
                                } else {
                                    return res.json({ errors: false, message: 'Recipient found.', user })
                                }
                            })
                            .catch(err => console.log(err))
                    } else {
                        return res.json({ errors: false, message: 'Recipient found.', user })
                    }
                })
                .catch(err => console.log(err))
        }
    },
    addDM: (req, res) => {
        let { recId, senderId, DM, from } = req.body
        let message = DM
        // console.log('INCOMING', from)
        Manager.findById({ _id: recId })
            .select('-createdAt -updatedAt -__v -password -phoneNum -role -employeeId -email -tasks -messages')
            .exec()
            .then(user => {
                if (!user) {
                    BHT.findById({ _id: recId })
                        .then(user => {
                            if (!user) {
                                return res.json({ message: 'No recipient found.' })
                            } else {
                                let newMessage = new BHTMessage({ bhtId: recId, senderId, message, from })
                                newMessage.save()
                                    .then(data => {
                                        BHT.findByIdAndUpdate({ _id: recId }, { $push: { 'messages': data._id } }, { new: true })
                                            .select('-createdAt -updatedAt -__v -password -phoneNum -role -employeeId -email -tasks -messages')
                                            .exec()
                                            .then(data => {
                                                res.json({ errors: false, message: 'Message sent.', data })
                                            })
                                            .catch(err => console.log(err))
                                    })
                                    .catch(err => console.log(err))
                            }
                        })
                } else {
                    let newMessage = new MGRMessage({ mgrId: recId, senderId, message, from })
                    newMessage.save()
                        .then(data => {
                            Manager.findByIdAndUpdate({ _id: recId }, { $push: { 'messages': data._id } }, { new: true })
                                .then(data => {
                                    res.json({ errors: false, message: 'Message sent.', data })
                                })
                                .catch(err => console.log(err))
                        })
                        .catch(err => console.log(err))
                }
            })
            .catch(err => console.log(err))
    },
    deleteDM: (req, res) => {
        let { _id } = req.body
        console.log('INCOMING', _id)
        MGRMessage.findById({ _id })
            .then(data => {
                if (!data) {
                    BHTMessage.findById({ _id })
                        .then(data => {
                            if (!data) {
                                return res.json({ message: 'This direct message is not in database.' })
                            } else {
                                BHTMessage.findByIdAndDelete({ _id })
                                    .then(data)
                                    .catch(err => console.log(err))
                                BHT.findByIdAndUpdate({ _id: data.bhtId }, { $pull: { 'messages': data._id } }, { new: true })
                                    .populate({ path: 'messages' })
                                    .select('-createdAt -updatedAt -__v -password -phoneNum')
                                    .exec()
                                    .then(user => {
                                        return res.json({ errors: false, message: 'Direct message deleted.', user })
                                    })
                                    .catch(err => console.log(err))
                            }
                        })
                        .catch(err => console.log(err))
                } else {
                    MGRMessage.findByIdAndDelete({ _id })
                        .then(data)
                        .catch(err => console.log(err))
                    Manager.findByIdAndUpdate({ _id: data.bhtId }, { $pull: { 'messages': data._id } }, { new: true })
                        .populate({ path: 'messages' })
                        .select('-createdAt -updatedAt -__v -password -phoneNum')
                        .exec()
                        .then(user => {
                            return res.json({ errors: false, message: 'Direct message deleted.', user })
                        })
                        .catch(err => console.log(err))
                }
            })
            .catch(err => console.log(err))
        // res.json('success')
    }
}