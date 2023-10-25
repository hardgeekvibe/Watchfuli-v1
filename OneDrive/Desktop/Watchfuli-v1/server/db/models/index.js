const Manager = require('./Manager/Manager')
const MGRTask = require('./Manager/MGRTask')
const MGRMessage = require('./Manager/MGRMessage')
const Admin = require('./Admin/Admin')
const Ticket = require('./Admin/Tickets')

module.exports = {
    // AUTH
    Manager,
    MGRTask,
    MGRMessage,
    
    // ADMIN
    Admin,
    Ticket
}