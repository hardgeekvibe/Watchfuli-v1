import {connect} from 'react-redux'
import AuthModal from '../../../components/authComponents/AuthModal'
import LoginForm from './LoginForm'
import RegForm from './RegForm'

const LoginModal = (props) => {
    return (
        <>
        <AuthModal>
            {props.auth.login ? <LoginForm/> : <RegForm/>}
        </AuthModal>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        auth : state.auth
    }
}

export default connect(mapStateToProps, null)(LoginModal)