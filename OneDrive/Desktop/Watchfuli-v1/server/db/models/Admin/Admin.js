const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    adminId : {
        type: String,
        required: true,
        unique: true
    },
    password : {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'ADMIN'
    },
    tickets:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ticket'
    }],
    messages:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AdminMessage'
    }]
}, {
    timestamps: true
})

module.exports = mongoose.model('Admin', adminSchema)