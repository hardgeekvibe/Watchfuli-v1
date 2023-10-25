import {connect} from 'react-redux'
import AuthModal from '../../../components/authComponents/AuthModal'
import ManagerForm from './ManagerForm'

const ManagerModal = () => {
    
    return (
        <>
        <AuthModal>
            <ManagerForm />
        </AuthModal>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        auth : state.auth
    }
}

export default connect(mapStateToProps, null)(ManagerModal)