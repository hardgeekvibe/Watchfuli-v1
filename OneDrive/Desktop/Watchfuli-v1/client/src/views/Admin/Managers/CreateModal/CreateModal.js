import {connect} from 'react-redux'
import AdminModal from '../../../../components/adminComponents/AdminModal'
import CreateMan from './CreateMan'
import DisplayMan from './DisplayMan'


const CreateModal = (props) => {
    // console.log('CREATE', props.admin)
    return (
        <>
        <AdminModal>
            {!props.admin.created ? <CreateMan/> : <DisplayMan/>}
        </AdminModal>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        admin : state.admin
    }
}

export default connect(mapStateToProps, null)(CreateModal)
