import { connect } from "react-redux"
import { findToggle } from "../../../../utils/redux/actions/adminActions"
import AdminTextInput from "../../../../components/adminComponents/AdminTextInput"
import Form from "../../../../components/blockComponents/Form"
import API from '../../../../utils/api/adminApi'

const FindForm = (props) => {
    // console.log("FIND", props.admin)
    let submit = (e) => {
        e.preventDefault()
        let { email, employeeId } = props.admin
        if (props.admin.findTog == false) {
            API.findManager({email : email})
        } else {
            API.findManager({employeeId : employeeId})
        }
    }
    return (
        <>
            <Form handleSubmit={submit} btnText='FIND'>
                <h4 className="modal-title">FIND MANAGER</h4>
                <div className="form-inputs">
                    {props.admin.findTog ?
                        <AdminTextInput name='employeeId' labelText='Employee ID:' required={true} /> :
                        <AdminTextInput name='email' labelText='Email:' required={true} />
                    }
                </div>
            </Form>
            <fieldset className="phone-toggle">
                {
                    props.admin.findTog ?
                        <p onClick={() => props.findToggle()}>Find by Email.</p> :
                        <p onClick={() => props.findToggle()}>Find by Employee ID.</p>
                }
            </fieldset>

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
        findToggle: () => dispatch(findToggle())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FindForm)