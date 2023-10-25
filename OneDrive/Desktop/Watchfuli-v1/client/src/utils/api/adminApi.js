import instance from './instance'
import store from '../redux/store'
import { setAppMess, ticketCreated, nowUser } from '../redux/actions/appActions'
import { setMessage, closeModal } from '../redux/actions/authActions'
import { setAdminMess, setManager, foundManager, confirm } from '../redux/actions/adminActions'

const adminApi = {
    createManager: async (user) => {
        await instance.post('/admin/create/manager', user)
            .then(res => {
                if (res.data.message !== 'Manager has been created.') {
                    store.dispatch(setAdminMess(res.data))
                } else {
                    store.dispatch(setManager(res.data))
                }
            })
            .catch(err => console.log(err))
    },
    findManager: async (user) => {
        await instance.post('/admin/find/manager', user)
            .then(res => {
                if (res.data.message !== 'Found Manager.') {
                    store.dispatch(setAdminMess(res.data))
                } else {
                    // console.log('FRONT', res.data)
                    store.dispatch(foundManager(res.data))
                }
            })
            .catch(err => console.log(err))
    },
    updateManager: async (user) => {
        await instance.post('/admin/update/manager', user)
            .then(res => {
                if (res.data.message !== 'Manager updated.') {
                    store.dispatch(setAppMess(res.data))
                } else {
                    store.dispatch(setManager(res.data))
                }
            })
            .catch(err => console.log(err))
    },
    deleteManager: async (user) => {
        await instance.post('/admin/delete/manager', user)
            .then(res => {
                if (res.data.message !== `Manager ${user.firstName} ${user.lastName} has been deleted.`) {
                    store.dispatch(setAppMess(res.data))
                } else {
                    store.dispatch(confirm(res.data))
                }
            })
            .catch(err => console.log(err))
    },
    createBHT: async (user) => {
        await instance.post('/admin/create/bht', user)
            .then(res => {
                if (res.data.message !== 'BHT has been created.'){
                    store.dispatch(setMessage(res.data))
                } else {
                    store.dispatch(nowUser(res.data))
                    store.dispatch(closeModal())
                }
            })
            .catch(err => console.log(err))
    },
    submitTicket: async (createTicket) => {
        await instance.post('/admin/submit/ticket', createTicket)
            .then(res => {
                if (res.data.message !== `Tech Support Ticket #${createTicket.ticketNumber} has been created.`){
                    store.dispatch(setAppMess(res.data))
                } else {
                    // console.log("FRONT", res.data)
                    store.dispatch(ticketCreated(`${createTicket.ticketNumber}`))
                }
            })
            .catch(err => console.log(err))
    }
}

export default adminApi