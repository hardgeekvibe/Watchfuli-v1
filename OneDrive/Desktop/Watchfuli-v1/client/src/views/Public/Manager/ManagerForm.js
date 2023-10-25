import { connect } from "react-redux"
import Form from '../../../components/blockComponents/Form'
import AuthTextInput from '../../../components/authComponents/AuthTextInput'
import { phoneToggle } from "../../../utils/redux/actions/authActions"
import API from '../../../utils/api/authApi'

const ManagerForm = (props) => {
    let submit = (e) => {
        e.preventDefault()
        let { email, phoneNum, password } = props.auth
        if (email == ''){
            email = phoneNum
        }
        let user = {email, password}
        API.loginManager(user)
    }

    return (
        <>
            <h2 className="modal-title">MANAGER</h2>
            <br />
            <Form handleSubmit={submit} btnText='LOG-IN'>
                <div className="form-inputs">
                    {props.auth.isNum ? <AuthTextInput name='phoneNum' labelText='Phone Number:' required={true} /> :
                    <AuthTextInput name='email' labelText='Email #:' required={true}/>}

                    <AuthTextInput name='password' labelText='Password:' />
                </div>
                <br />
                <div className="phone-toggle" onClick={() => props.phoneToggle()}>{props.auth.isNum ? 'Use your email to log-in.' : 'Use your phone number to log-in.'}</div>
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
        phoneToggle: () => dispatch(phoneToggle())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManagerForm)