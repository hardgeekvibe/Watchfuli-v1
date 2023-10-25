import {connect} from 'react-redux'
import { reportChange } from '../../utils/redux/actions/reportActions' 

const ReportTextInput = (props) => {
    return (
        <>
        <label className='text-label' htmlFor={props.name}>{props.labelText}</label>
        <input
        className='text-input'
        type='text'
        name={props.name}
        value={props.report[props.name]}
        onChange={(e) => props.reportChange(e.target)}
        required={props.required}
        />
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        report : state.report
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        reportChange : (input)=>dispatch(reportChange(input))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportTextInput)