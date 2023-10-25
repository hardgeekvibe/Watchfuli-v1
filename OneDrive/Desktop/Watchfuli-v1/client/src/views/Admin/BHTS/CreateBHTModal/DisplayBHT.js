import { connect } from "react-redux"

const DisplayBHT = (props) => {
    return (
        <div>
            <h3>BHT has been created...</h3>
            <div>First Name:<p className="display">{props.app.firstName}</p></div>
            <div><p>Last Name:</p>{props.app.lastName}</div>
            <div><p>Email:</p>{props.app.email}</div>
            <div><p>Phone Number:</p>{props.app.phoneNum}</div>
            <div><p>Employee:</p>{props.app.employeeId}</div>
            <div><p>Message:</p>{props.app.message}</div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        app : state.app
    }
}

export default connect(mapStateToProps, null)(DisplayBHT)