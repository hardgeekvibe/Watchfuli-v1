import { connect } from 'react-redux'
import { openModal } from '../../utils/redux/actions/authActions'
import API from '../../utils/api/authApi'

const Navbar = (props) => {
    // console.log('NAVBAR', props.auth)
    let logoutUser = (e) => {
        e.preventDefault()
        API.logoutManager()
    }

    if (props.app.userRole == 'ADMIN') {
        return (
            <>
                <nav className='navbar'>
                    <div className='admin-title'>
                        <h1 className='welcome-admin'>ADMIN DASHBOARD</h1>
                    </div>
                    <div>
                        <ul className="topnav">
                            <li className="links">
                                {props.app.isAuth ?
                                    <a onClick={(e) => logoutUser(e)}>Log Out</a>
                                    :
                                    <a onClick={() => props.openModal()}>Log In</a>
                                }
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        )
    }

    if (props.app.userRole == 'MGR') {
        return (
            <>
                <nav className='navbar'>
                    <div className='mgr-title'>
                        <h1 className='welcome'>MANAGER DASHBOARD</h1>
                        <h2 className='name'>{props.app.user.firstName} {props.app.user.lastName}</h2>
                    </div>
                    <div>
                        <ul className="topnav">
                            <li className="links">
                                {props.app.isAuth ?
                                    <a onClick={(e) => logoutUser(e)}>Log Out</a>
                                    :
                                    <a onClick={() => props.openModal()}>Log In</a>
                                }
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        )
    }
    return (
        <>
            <nav className="navbar">
                <div className='logo-div'>
                    {!props.app.isAuth ? <img
                        src={require('../../utils/images/WatchfulEye-3.PNG')}
                        className='logo'
                    /> :
                        <div>
                            <h1 className='welcome-bht'>BEHAVIORAL HEALTH TECH</h1>
                            <h2 className='name'>{props.app.user.firstName} {props.app.user.lastName}</h2>
                        </div>
                    }
                </div>
                <div className='login-logout'>
                    <ul className="topnav">
                        {/* <li>
                            <label class="hamburger-menu">
                                <input type="checkbox" />
                            </label>
                        </li> */}
                        <li className="links">
                            {props.app.isAuth ?
                                <a onClick={(e) => logoutUser(e)}>Log Out</a>
                                :
                                <a onClick={() => props.openModal()}>Log In</a>
                            }
                        </li>
                    </ul>
                </div>
            </nav>
            
        </>
    )


}

const mapStateToProps = (state) => {
    return {
        app: state.app,
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openModal: () => dispatch(openModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)