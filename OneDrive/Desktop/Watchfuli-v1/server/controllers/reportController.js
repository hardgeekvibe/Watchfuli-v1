const BHT = require('../db/models/BHT/BHT')
const Manager = require('../db/models/Manager/Manager')

module.exports = {
    createReport: (req, res) => {
        console.log("INCOMING", req.body)
        res.json('success')
    }
}