import { connect } from 'react-redux'
import Form from '../../../../components/blockComponents/Form'
import { v4 as uuid } from 'uuid'
import AdminTextInput from '../../../../components/adminComponents/AdminTextInput'
import API from '../../../../utils/api/adminApi'
import { adminChange } from '../../../../utils/redux/actions/adminActions'

const CreateMan = (props) => {
    // console.log('CREATE', props.admin)
    let { firstName, lastName, email, phoneNum, password1, password2 } = props.admin
    let submit = (e) => {
        e.preventDefault()
        if (props.admin.default == true){
            password1 = '1234'
            password2 = '1234'
        }
        let number = uuid().slice(0, 6)
        let firstLetter = firstName.split('').shift()
        let lastLetter = lastName.split('').shift()
        let employeeId = `${firstLetter}${lastLetter}${number}`
        let user = { firstName, lastName, email, phoneNum, password1, password2, employeeId }
        // console.log('CREATE', user)
        API.createManager(user)
    }

    return (
        <>
            <h4 className='modal-title'>CREATE A MANAGER</h4>
            <Form handleSubmit={submit} btnText='CREATE'>
                <div className="form-inputs">
                    <AdminTextInput name='firstName' labelText='First Name:' required={true} />
                    <AdminTextInput name='lastName' labelText='Last Name:' required={true} />
                    <AdminTextInput name='email' labelText='Email:' required={true} />
                    <AdminTextInput name='phoneNum' labelText='Phone Number:' required={true} />
                    {!props.admin.default ?
                        <>
                            <AdminTextInput name='password1' labelText='Password:' required={true} />
                            <AdminTextInput name='password2' labelText='Re-Enter Password:' required={true} />
                        </> : null
                    }

                </div>
                <div className='default'>
                    <input type='checkbox' name='default' onChange={(e) => props.adminChange(e.target)} />
                    {!props.admin.default ?
                    <>
                    Use default password (1234).
                    </> :
                    <>
                    Default password (1234) is being used.
                    </>}
                </div>
            </Form>
            <p>{props.admin.message}</p>
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
        adminChange: (input) => dispatch(adminChange(input))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateMan)