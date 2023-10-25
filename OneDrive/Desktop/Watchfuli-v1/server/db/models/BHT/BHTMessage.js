const mongoose = require('mongoose')

const bhtMessageSchema = new mongoose.Schema({
    message: {
        type: String,
    },
    bhtId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BHT'
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

module.exports = mongoose.model('BHTMessage', bhtMessageSchema)