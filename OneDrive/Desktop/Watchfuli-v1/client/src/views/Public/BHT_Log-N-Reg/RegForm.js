import { connect } from 'react-redux'
import Form from '../../../components/blockComponents/Form'
import { v4 as uuid } from 'uuid'
import { logToggle } from '../../../utils/redux/actions/authActions'
import AuthTextInput from '../../../components/authComponents/AuthTextInput'
import API from '../../../utils/api/adminApi'

const RegForm = (props) => {
    // console.log("REGFORM", props.auth)
    let { firstName, lastName, email, phoneNum, password1, password2 } = props.auth
    let submit = (e) => {
        e.preventDefault()
        let number = uuid().slice(0, 6)
        let firstLetter = firstName.split('').shift()
        let lastLetter = lastName.split('').shift()
        let employeeId = `${firstLetter}${lastLetter}${number}`
        let user = { firstName, lastName, email, phoneNum, password1, password2, employeeId }
        API.createBHT(user)
    }


    return (
        <>
            <h2 className='modal-title'>BHT REGISTER</h2>
            <br />
            <Form handleSubmit={submit} btnText='REGISTER'>
                <div className="form-inputs">
                    <AuthTextInput name='firstName' labelText='First Name:' required={true} />
                    <AuthTextInput name='lastName' labelText='Last Name:' required={true} />
                    <AuthTextInput name='email' labelText='Email:' required={true} />
                    <AuthTextInput name='phoneNum' labelText='Phone Number:' required={true} />
                    <AuthTextInput name='password1' labelText='Password:' required={true} />
                    <AuthTextInput name='password2' labelText='Re-Enter Password:' required={true} />
                </div>
                <fieldset className='passing'>
                    {props.auth.isPass ? <div>Password Passed.</div> :
                        <ul>
                            {props.auth.isPassNum ? <li>👍 : Contains one number.</li> : <li>👎 : Does not contain one number.</li>}
                            {props.auth.isPassSym ? <li>👍 : Contains one symbol.</li> : <li>👎 : Does not contain one symbol.</li>}
                            {props.auth.isSix ? <li> 👍 : Contains 6 characters.</li> : <li>👎 : Password is not 6 characters.</li>}
                        </ul>}
                </fieldset>
            </Form>

            <br />
            <div>
                <p className='account'>Have an account, log-in here:</p>
                <button className="reg-log" onClick={() => props.logToggle()}>
                    {props.auth.login ? 'REGISTER' : 'LOG-IN'}
                </button>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logToggle: () => dispatch(logToggle())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegForm)