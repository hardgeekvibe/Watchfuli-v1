import {connect} from 'react-redux'
import { messChange } from '../../utils/redux/actions/messageActions' 

const MessTextInput = (props) => {
    return (
        <>
        <label className='text-label' htmlFor={props.name}>{props.labelText}</label>
        <input
        className='text-input'
        type='text'
        name={props.name}
        value={props.mess[props.name]}
        onChange={(e) => props.messChange(e.target)}
        required={props.required}
        />
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        mess : state.mess
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        messChange : (input)=>dispatch(messChange(input))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessTextInput)