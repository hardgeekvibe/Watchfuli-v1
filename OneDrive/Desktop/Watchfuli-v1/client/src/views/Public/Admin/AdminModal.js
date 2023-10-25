import {connect} from 'react-redux'
import AuthModal from '../../../components/authComponents/AuthModal'
import AdminForm from './AdminForm'

const AdminModal = (props) => {
    
    return (
        <>
        <AuthModal>
            <AdminForm />
        </AuthModal>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        auth : state.auth
    }
}

export default connect(mapStateToProps, null)(AdminModal)

