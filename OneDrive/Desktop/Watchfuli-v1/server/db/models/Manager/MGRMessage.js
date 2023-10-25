const mongoose = require('mongoose')

const mgrMessageSchema = new mongoose.Schema({
    message: {
        type: String,
    },
    mgrId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Manager'
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

module.exports = mongoose.model('MGRMessage', mgrMessageSchema)