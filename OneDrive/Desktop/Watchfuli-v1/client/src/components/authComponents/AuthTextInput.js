import {connect} from 'react-redux'
import { authChange } from '../../utils/redux/actions/authActions' 

const AuthTextInput = (props) => {
    // console.log("INPUT", props.auth)
    return (
        <>
        <label className='text-label' htmlFor={props.name}>{props.labelText}</label>
        <input
        className='text-input'
        type='text'
        name={props.name}
        value={props.auth[props.name]}
        onChange={(e) => props.authChange(e.target)}
        required={props.required}
        />
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        auth : state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        authChange : (input)=>dispatch(authChange(input))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthTextInput)