import { connect } from 'react-redux'
import Form from '../../../../components/blockComponents/Form'
import { v4 as uuid } from 'uuid'
import AppTextInput from '../../../../components/appComponents/AppTextInput'
import API from '../../../../utils/api/adminApi'
import { appChange } from '../../../../utils/redux/actions/appActions'

const CreateBHT = (props) => {
    let { firstName, lastName, email, phoneNum, password1, password2 } = props.app
    let submit = (e) => {
        e.preventDefault()
        if (props.app.default == true){
            password1 = '1234'
            password2 = '1234'
        }
        let number = uuid().slice(0, 6)
        let firstLetter = firstName.split('').shift()
        let lastLetter = lastName.split('').shift()
        let employeeId = `${firstLetter}${lastLetter}${number}`
        let user = { firstName, lastName, email, phoneNum, password1, password2, employeeId }
        API.createBHT(user)
    }

    return (
        <>
            <h4>CREATE A BHT</h4>
            {/* <br/> */}
            <Form handleSubmit={submit} btnText='CREATE'>
                <div className="form-inputs">
                    <AppTextInput name='firstName' labelText='First Name:' required={true} />
                    <AppTextInput name='lastName' labelText='Last Name:' required={true} />
                    <AppTextInput name='email' labelText='Email:' required={true} />
                    <AppTextInput name='phoneNum' labelText='Phone Number:' required={true} />
                    {!props.app.default ?
                        <>
                            <AppTextInput name='password1' labelText='Password:' required={true} />
                            <AppTextInput name='password2' labelText='Re-Enter Password:' required={true} />
                        </> : null
                    }

                </div>
                <div className='default'>
                    <input type='checkbox' name='default' onChange={(e) => props.appChange(e.target)} />
                    {!props.app.default ?
                    <>
                    Use default password (1234).
                    </> :
                    <>
                    Default password (1234) is being used.
                    </>}
                </div>
            </Form>
            <p>{props.app.message}</p>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        app: state.app
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        appChange: (input) => dispatch(appChange(input))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateBHT)