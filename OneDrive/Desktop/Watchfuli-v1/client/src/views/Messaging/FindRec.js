import { connect } from "react-redux"
import { findMessTog } from "../../utils/redux/actions/messageActions"
import MessTextInput from "../../components/messageComponents/MessTextInput"
import Form from "../../components/blockComponents/Form"
import API from '../../utils/api/messApi'

const FindRec = (props) => {
    // console.log("MESSAGE", props.mess)
    let submit = (e) => {
        e.preventDefault()
        let { email, employeeId } = props.mess
        if (props.mess.messTog == false) {
        API.findRec({email : email})
        } else {
        API.findRec({employeeId : employeeId})
        }
    }
    return (
        <>
            <Form handleSubmit={submit} btnText='FIND'>
                <h4 className="modal-title">FIND RECIPIENT</h4>
                <div className="form-inputs">
                    {
                        props.mess.messTog ?
                            <MessTextInput name='employeeId' labelText='Employee ID:' required={true} />
                             :
                            <MessTextInput name='email' labelText='Email:' required={true} />
                    }
                </div>
            </Form>
            <div>
                {
                    props.mess.messTog ?
                        <fieldset className="phone-toggle"><p onClick={() => props.findMessTog()}>Find by Email.</p></fieldset> :
                        <fieldset className="phone-toggle"><p onClick={() => props.findMessTog()}>Find by Employee ID.</p></fieldset>
                }
            </div>

            <p>{props.mess.message}</p>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        mess: state.mess
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        findMessTog: () => dispatch(findMessTog())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FindRec)