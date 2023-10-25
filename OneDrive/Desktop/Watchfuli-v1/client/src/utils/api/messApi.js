import instance from './instance'
import store from '../redux/store'
import { setMess, setSender, messSent } from '../redux/actions/messageActions'
import { nowUser, openDM } from '../redux/actions/appActions'

const messApi = {
    findRec: async (user) => {
        await instance.post('/message/find', user)
            .then(res => {
                if (res.data.message !== "Recipient found.") {
                    store.dispatch(setMess(res.data))
                } else {
                    store.dispatch(setSender(res.data))
                }
            })
    },
    addDM: async (message) => {
        // console.log('OUT', message)
        await instance.post('/message/send', message)
            .then(res => {
                if (res.data.message !== 'Message sent.'){
                    store.dispatch(setMess(res.data))
                } else {
                    // console.log('FRONT', res.data)
                    store.dispatch(messSent(res.data))
                }
            })
    },
    deleteDM: async (_id) => {
        await instance.post('/message/delete', _id)
            .then(res => {
                // console.log('FRONT', res.data)
                store.dispatch(nowUser(res.data))
                store.dispatch(openDM())
            })
    }
}

export default messApi