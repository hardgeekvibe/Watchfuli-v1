import {connect} from 'react-redux'
import { adminChange } from '../../utils/redux/actions/adminActions' 

const AdminTextInput = (props) => {
    // console.log("INPUT", props.auth)
    return (
        <>
        <label className='text-label' htmlFor={props.name}>{props.labelText}</label>
        <input
        className='text-input'
        type='text'
        name={props.name}
        value={props.admin[props.name]}
        onChange={(e) => props.adminChange(e.target)}
        required={props.required}
        />
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        admin : state.admin
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        adminChange : (input)=>dispatch(adminChange(input))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminTextInput)