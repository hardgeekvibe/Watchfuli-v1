import {connect} from 'react-redux'
import { messChange } from '../../utils/redux/actions/messageActions' 

const MessTextArea = (props) => {
    return (
        <>
        <label htmlFor={props.name}>{props.labelText}</label>
        <textarea
        name={props.name}
        value={props.mess[props.name]}
        cols={props.cols}
        rows={props.rows}
        placeholder={props.placeholder}
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

export default connect(mapStateToProps, mapDispatchToProps)(MessTextArea)