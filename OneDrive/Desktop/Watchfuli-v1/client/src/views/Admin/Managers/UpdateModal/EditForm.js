import { connect } from "react-redux"
import Form from "../../../../components/blockComponents/Form"
import AdminTextInput from "../../../../components/adminComponents/AdminTextInput"
import { passToggle } from "../../../../utils/redux/actions/adminActions"
import API from '../../../../utils/api/adminApi'


const EditForm = (props) => {
    // console.log('EDIT', props.admin)
    let { firstName, lastName, email, phoneNum, password1, password2, edit_id } = props.admin
    let submit = (e) => {
        e.preventDefault()
        let user = {firstName, lastName, email, phoneNum, password1, password2, edit_id}
        API.updateManager(user)
    }


    return (
        <>
            <h4 className="modal-title">UPDATE MANAGER</h4>
            <Form handleSubmit={submit} btnText='UPDATE'>
                <div className="form-inputs">
                    <AdminTextInput name='firstName' labelText='First Name:' required={true} />
                    <AdminTextInput name='lastName' labelText='Last Name:' required={true} />
                    <AdminTextInput name='email' labelText='Email:' required={true} />
                    <AdminTextInput name='phoneNum' labelText='Phone Number:' required={true} />
                    <AdminTextInput name='editUserRole' labelText='Manager Role:' required={true} />
                    {
                        props.admin.passTog ?
                            <>
                                <AdminTextInput name='password1' labelText='Password:' required={true} />
                                <AdminTextInput name='password2' labelText='Re-Enter Password:' required={true} />
                            </>
                            :
                            null

                    }
                </div>
            </Form>
            <fieldset className="phone-toggle">
            {
                props.admin.passTog ?
                <>
                <p onClick={() => props.passToggle()}>Don't update Password</p>
                </> :
                <p onClick={() => props.passToggle()}>Update Password</p>
            }
            </fieldset>
            <br />
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
        passToggle: () => dispatch(passToggle())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditForm)