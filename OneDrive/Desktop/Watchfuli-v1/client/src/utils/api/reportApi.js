import instance from './instance'
import store from '../redux/store'

const reportApi = {
    generateReport: async (data) => {
        await instance.get('/report/create', data)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }
}

export default reportApi