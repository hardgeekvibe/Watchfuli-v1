const mongoose = require('mongoose')

const managerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    employeeId : {
        type: String,
        required: true,
        unique: true
    },
    phoneNum: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'MGR'
    },
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "MGRTask"
    }],
    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MGRMessage'
    }]
},{
    timestamps: true
})

module.exports = mongoose.model('Manager', managerSchema)