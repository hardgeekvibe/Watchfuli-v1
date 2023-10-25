import { connect } from "react-redux"
import Form from '../../../components/blockComponents/Form'
import AuthTextInput from '../../../components/authComponents/AuthTextInput'
import { logToggle, phoneToggle } from "../../../utils/redux/actions/authActions"
import API from '../../../utils/api/authApi'

const AdminForm = (props) => {
    let submit = (e) => {
        e.preventDefault()
        let {adminId, password} = props.auth
        let user = {adminId, password}
        API.loginAdmin(user)
    }

    return (
        <>
            <h2>ADMIN</h2>
            <br />
            <Form handleSubmit={submit} btnText='LOG-IN'>
                <div className="form-inputs">
                    <AuthTextInput name='adminId' labelText='Admin #:' required={true}/>
                    <AuthTextInput name='password' labelText='Password:' />
                </div>
                <br />
            </Form>
            <br />
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logToggle: () => dispatch(logToggle()),
        phoneToggle: () => dispatch(phoneToggle())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminForm)