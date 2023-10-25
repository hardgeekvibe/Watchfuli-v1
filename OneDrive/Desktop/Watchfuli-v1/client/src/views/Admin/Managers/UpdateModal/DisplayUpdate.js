import { connect } from "react-redux"
import AdminModal from "../../../../components/adminComponents/AdminModal"

const DisplayUpdate = (props) => {
    return (
        <AdminModal>
            <div>
                <h3 className="modal-title">Updated Manager...</h3>
                <div>First Name:<p className="display">{props.admin.firstName}</p></div>
                <div><p>Last Name:</p>{props.admin.lastName}</div>
                <div><p>Email:</p>{props.admin.email}</div>
                <div><p>Phone Number:</p>{props.admin.phoneNum}</div>
                <div><p>Employee:</p>{props.admin.employeeId}</div>
                <div><p>Message:</p>{props.admin.message}</div>
            </div>
        </AdminModal>
    )
}

const mapStateToProps = (state) => {
    return {
        admin: state.admin
    }
}

export default connect(mapStateToProps, null)(DisplayUpdate)