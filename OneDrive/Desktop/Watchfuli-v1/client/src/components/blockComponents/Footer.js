import {connect} from 'react-redux'
import { admin, manager } from '../../utils/redux/actions/authActions'
import { openTicket } from '../../utils/redux/actions/appActions'

const Footer = (props) => {
    // console.log('FOOTER', props.app)
    return (
        <div className="footer">
        {!props.app.isAuth && <a className='foot-links' onClick={() => props.manager()}>Manager Login</a>}
        {!props.app.isAuth && <a className='foot-links' onClick={() => props.admin()}>Admin Login</a>}
        <h4><a>Hard Coded, LLC.</a></h4>
        {props.app.isAuth && <a className='foot-links' onClick={() => props.openTicket(props.app.user)}>🎫</a>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        app : state.app
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        admin : () => dispatch(admin()),
        manager : () => dispatch(manager()),
        openTicket : (user) => dispatch(openTicket(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)