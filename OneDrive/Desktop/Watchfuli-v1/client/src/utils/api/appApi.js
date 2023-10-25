import { connect } from 'react-redux'
import instance from './instance'
import store from '../redux/store'
import { getDirect } from '../redux/actions/appActions'

const appApi = {
    getDirect: async () => {
        await instance.get('/app/directory')
            .then(res => {
                // console.log('FRONT', res.data)
                store.dispatch(getDirect(res.data))
            })
    }
}

export default appApi