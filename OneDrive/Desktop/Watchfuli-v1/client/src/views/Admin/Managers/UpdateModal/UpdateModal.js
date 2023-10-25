import { connect } from "react-redux"
import AdminModal from "../../../../components/adminComponents/AdminModal"
import EditForm from "./EditForm"
import FindForm from "./FindForm"
import DisplayUpdate from "./DisplayUpdate" //

const UpdateModal = (props) => {
    // console.log(props.app)
    return (
        <>
            <AdminModal>
                {props.admin.found ? <EditForm /> : <FindForm />}
            </AdminModal>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        admin: state.admin
    }
}

export default connect(mapStateToProps, null)(UpdateModal)