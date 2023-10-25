import {connect} from 'react-redux'
import AdminModal from '../../../../components/adminComponents/AdminModal'
import CreateBHT from './CreateBHT'
import DisplayBHT from './DisplayBHT'


const CreateBHTModal = (props) => {
    // console.log('CREATE', props.admin)
    return (
        <>
        <AdminModal>
            {!props.admin.createdBHT ? <CreateBHT/> : <DisplayBHT/>}
        </AdminModal>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        admin : state.admin
    }
}

export default connect(mapStateToProps, null)(CreateBHTModal)