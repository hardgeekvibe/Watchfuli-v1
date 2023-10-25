import { connect } from "react-redux"
import { closeAdminModal } from "../../../../utils/redux/actions/adminActions"
import API from '../../../../utils/api/adminApi'

const DeleteSure = (props) => {
    let sendManager = () => {
        let _id = props.admin.delete_id
        let { firstName, lastName } = props.admin
        let user = { _id, firstName, lastName }
        console.log('SEND', user)
        API.deleteManager(user)
    }
    return (
        <>
            {
                !props.admin.isConfirm ?
                    <>
                        <h3>
                            Are you sure you want to <span className="delete">DELETE</span> Manager {props.admin.firstName} {props.admin.lastName}?
                        </h3>
                        <hr />
                        <p>
                            All <span className="task-mess">Tasks</span> and <span className="task-mess">Message</span> will be <span className="delete">DELETED</span>.
                        </p>
                        <div className="btn-div">
                            <button className="cancel-btn" onClick={() => props.closeAdminModal()}>CANCEL</button>
                            <button className="confirm-btn" onClick={() => sendManager()}>CONFIRM</button>
                        </div>
                    </> :
                    <h3>{props.admin.deleteMessage}</h3>

            }

        </>
    )
}

const mapStateToProps = (state) => {
    return {
        admin: state.admin
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeAdminModal: () => dispatch(closeAdminModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteSure)