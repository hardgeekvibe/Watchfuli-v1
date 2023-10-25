import instance from './instance'
import store from '../redux/store'
import { closeModal, setMessage } from '../redux/actions/authActions'
import { nowUser, logout, nowAdmin } from '../redux/actions/appActions'
import { closeMess } from '../redux/actions/messageActions'

const authApi = {
    loginManager: async (user) => {
        await instance.post('/auth/login/manager', user)
            .then(res => {
                // console.log("FRONT", res.data)
                if (res.data.message !== 'Manager logged in.') {
                    store.dispatch(setMessage(res.data))
                } else {
                    store.dispatch(nowUser(res.data))
                    store.dispatch(closeModal())
                    
                }
            })
            .catch(err => console.log(err))
    },
    logoutManager: async (_id) => {
        await instance.post('/auth/logout/manager', _id)
        .then(res => {
                store.dispatch(closeMess())
                store.dispatch(logout())
            })
    },
    loginAdmin: async (user) => {
        await instance.post('/admin/login', user)
            .then(res => {
                if (res.data.message !== 'Admin logged in.') {
                    store.dispatch(setMessage(res.data))
                } else {
                    store.dispatch(nowAdmin(res.data))
                    store.dispatch(closeModal())
                }
            })
    },
    loginBHT: async (user) => {
        await instance.post('/auth/login/bht', user)
            .then(res => {
                if(res.data.message !== 'BHT logged in.') {
                    store.dispatch(setMessage(res.data))
                } else {
                    // console.log('FRONT', res.data)
                    store.dispatch(nowUser(res.data))
                    store.dispatch(closeModal())
                }
            })
    }
}

export default authApi