import authApi from './authApi'
import messApi from './messApi'
import adminApi from './adminApi'
import reportApi from './reportApi'

const API = {
    // AUTH
    createManager : authApi.createManager,
    loginManager : authApi.loginManager,
    
    // AUTH
    createBHT : adminApi.createBHT,

    // MESSAGE
    findRec : messApi.findRec,
    addDM : messApi.addDM,

    // REPORT
    generateReport : reportApi.generateReport
}

export default API