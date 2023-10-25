const authControllers = require('./authController')
const adminControllers = require('./adminController')
const messageControllers = require('./messageController')
const appControllers = require('./appControllers')
const reportController = require('./reportController')

module.exports = {
    // AUTH
    loginManager : authControllers.loginManager,
    logoutManager : authControllers.logoutManager,
    loginBHT : authControllers.loginBHT,

    // APP
    getDirect : appControllers.getDirect,
    
    // ADMIN
    submitTicket : adminControllers.submitTicket,
    //>>>>> MANAGER
    loginAdmin : adminControllers.loginAdmin,
    createManager : adminControllers.createManager,
    findManager : adminControllers.findManager,
    updateManager : adminControllers.updateManager,
    deleteManager : adminControllers.deleteManager,
    //>>>>> BHT
    createBHT : adminControllers.createBHT,

    // MESSAGE
    findRecipient : messageControllers.findRecipient,
    addDM : messageControllers.addDM,
    deleteDM : messageControllers.deleteDM,

    // REPORT
    createReport : reportController.createReport
}