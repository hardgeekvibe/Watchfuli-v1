const mongoose = require('mongoose')

const adminMessageSchema = new mongoose.Schema({
    message: {
        type: String,
    },
    adminId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin'
    },
    senderId: {
        type : String,
    },
    from : {
        type : String
    }
},{
    timestamps: true
})

module.exports = mongoose.model('AdminMessage', adminMessageSchema)