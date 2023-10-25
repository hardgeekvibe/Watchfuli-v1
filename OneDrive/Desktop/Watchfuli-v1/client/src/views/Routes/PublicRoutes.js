import {connect} from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const PublicRoute = (props) => {
    // console.log('Public', props.auth)
    return (
        <>
        { props.app.isAuth ? <Navigate to='/home'/> : <Outlet/>}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        app : state.app
    }
}

export default connect(mapStateToProps, null)(PublicRoute)