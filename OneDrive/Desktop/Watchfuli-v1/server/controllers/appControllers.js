const Manager = require('../db/models/Manager/Manager')
const BHT = require('../db/models/BHT/BHT')
const Admin = require('../db/models/Admin/Admin')

module.exports = {
    getDirect: (req, res) => {
        // let employees = Object.assign({})
        let employees = []
        Manager.find({})
            .select('-createdAt -updatedAt -__v -password -messages -tasks')
            .exec()
            .then(data => {
                employees = data
                BHT.find({})
                    .select('-createdAt -updatedAt -__v -password -messages -tasks')
                    .exec()
                    .then(data => {
                        employees.push(...data)
                        Admin.find({})
                            .select('-createdAt -updatedAt -__v -password -messages -tickets')
                            .exec()
                            .then(data => {
                                employees.push(...data)
                                return res.json({ message: 'Everyone was found', employees })
                            })
                            .catch(err => console.log(err))
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }
}