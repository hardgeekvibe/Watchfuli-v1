const mongoose = require('mongoose')

const BHTTaskSchema = new mongoose.Schema({
    task: {
        type: String,
    },
    urgency: {
        type: Number,
        required: true
    },
    bhtId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BHT'
    }
},{
    timestamps: true
})

module.exports = mongoose.model('BHTTask', BHTTaskSchema)