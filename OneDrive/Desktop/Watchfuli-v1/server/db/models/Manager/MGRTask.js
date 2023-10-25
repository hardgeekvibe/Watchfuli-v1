const mongoose = require('mongoose')

const MGRTaskSchema = new mongoose.Schema({
    task: {
        type: String,
    },
    urgency: {
        type: Number,
        required: true
    },
    mgrId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Manager'
    }
},{
    timestamps: true
})

module.exports = mongoose.model('MGRTask', MGRTaskSchema)