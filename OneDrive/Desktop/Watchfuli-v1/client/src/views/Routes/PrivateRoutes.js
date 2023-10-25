import {connect} from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = (props) => {
    return (
        <>
        { props.app.isAuth ? <Outlet/> : <Navigate to='/'/>}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        app : state.app
    }
}

export default connect(mapStateToProps, null)(PrivateRoute)