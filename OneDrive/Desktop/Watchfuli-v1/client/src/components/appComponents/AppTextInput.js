import {connect} from 'react-redux'
import { appChange } from '../../utils/redux/actions/appActions' 

const AppTextInput = (props) => {
    // console.log("INPUT", props.auth)
    return (
        <>
        <label className='text-label' htmlFor={props.name}>{props.labelText}</label>
        <input
        className='text-input'
        type='text'
        name={props.name}
        value={props.app[props.name]}
        onChange={(e) => props.appChange(e.target)}
        required={props.required}
        />
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        app : state.app
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        appChange : (input)=>dispatch(appChange(input))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppTextInput)