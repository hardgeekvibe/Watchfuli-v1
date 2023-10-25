const express = require("express")
const app = express()
const cors = require('cors')
const routes = require('./routes')
const PORT = 8000
const auth = require('./auth')
const helmet = require('helmet')

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
    optionsSuccessStatus: 200
}))
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(express.static(__dirname + '/public'))
app.use(helmet())

// app.set('views', './views')

auth(app)
app.set('json spaces', 2)
app.use(routes)
require('./db')

app.listen(PORT, ()=>console.log(`Always watching on ${PORT}`))

module.exports = app