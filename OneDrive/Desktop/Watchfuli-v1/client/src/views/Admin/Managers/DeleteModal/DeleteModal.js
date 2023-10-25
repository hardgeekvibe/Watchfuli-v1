import { connect } from "react-redux"
import AdminModal from "../../../../components/adminComponents/AdminModal"
import FindForm from "../UpdateModal/FindForm"
import DeleteSure from "./DeleteSure"

const DeleteModal = (props) => {
    return (
        <>
            <AdminModal>
                {props.admin.isSure ? <DeleteSure /> : <FindForm />}
            </AdminModal>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        admin: state.admin
    }
}

export default connect(mapStateToProps, null)(DeleteModal)