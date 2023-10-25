const mongoose = require('mongoose')

const bhtSchema = new mongoose.Schema({
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
        default: 'BHT'
    },
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "BHTTask"
    }],
    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BHTMessage'
    }]
},{
    timestamps: true
})

module.exports = mongoose.model('BHT', bhtSchema)