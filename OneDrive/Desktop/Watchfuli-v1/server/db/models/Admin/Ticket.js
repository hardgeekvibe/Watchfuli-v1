const mongoose = require('mongoose')

const ticketSchema = new mongoose.Schema({
    senderId: {
        type: String,
    },
    senderName: {
        type: String,
    },
    ticket: {
        type: String,
    },
    ticketNumber: {
        type: String,
        required: true,
        unique: true
    },
    urgency: {
        type: Number,
        required: true,
        default: 1,
    },
    adminId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin'
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Ticket', ticketSchema)