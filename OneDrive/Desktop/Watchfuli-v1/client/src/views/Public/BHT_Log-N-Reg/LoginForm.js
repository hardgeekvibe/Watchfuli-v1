import { connect } from "react-redux"
import Form from '../../../components/blockComponents/Form'
import AuthTextInput from '../../../components/authComponents/AuthTextInput'
import { logToggle, phoneToggle } from "../../../utils/redux/actions/authActions"
import API from '../../../utils/api/authApi'

const LoginForm = (props) => {
    let submit = (e) => {
        e.preventDefault()
        let { email, phoneNum, password } = props.auth
        if (email == ''){
            email = phoneNum
        }
        let user = {email, password}
        API.loginBHT(user)
    }

    return (
        <>
            <h2 className='modal-title'>BHT LOG-IN</h2>
            <br />
            <Form handleSubmit={submit} btnText='LOG-IN' submitBtn='submit-btn'>
                <div className="form-inputs">
                    {props.auth.isNum ? <AuthTextInput name='phoneNum' labelText='Phone Number:' required={true}/> : <AuthTextInput name='email' labelText='Email:' required={true}/>}

                    <AuthTextInput name='password' labelText='Password:' />
                </div>
                <br />
                <fieldset className="phone-toggle" onClick={() => props.phoneToggle()}>{props.auth.isNum ? 'Use your email to log-in.' : 'Use your phone number to log-in.'}</fieldset>
                <br />
            </Form>
            <br />
            <p className="account">Don't have an account, register here:</p>
            <button className="reg-log" onClick={() => props.logToggle()}>
                {props.auth.login ? 'REGISTER' : 'LOG-IN'}
            </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)