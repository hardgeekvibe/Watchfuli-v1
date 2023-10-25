import { connect } from "react-redux"

const DisplayMan = (props) => {
    return (
        <div>
            {
                props.admin.updated ? <h3 className="modal-title">Manager Updated</h3> :
                <h3 className="modal-title">Manager Created</h3>
            }
            <hr/>
            <div className="display-title">First Name:<span className="display">{props.admin.firstName}</span></div>
            <div className="display-title">Last Name:<span className="display">{props.admin.lastName}</span></div>
            <div className="display-title">Email:<span className="display">{props.admin.email}</span></div>
            <div className="display-title">Phone Number:<span className="display">{props.admin.phoneNum}</span></div>
            <div className="display-title">Employee Id:<span className="display">{props.admin.employeeId}</span></div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        admin : state.admin
    }
}

export default connect(mapStateToProps, null)(DisplayMan)