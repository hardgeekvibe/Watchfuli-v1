if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const mongoose = require('mongoose')
const MONGO_URI = process.env.MONGO_URI

mongoose.set('strictQuery', false)
mongoose.connect(MONGO_URI, console.log('Where did the dog bury his bone...'))