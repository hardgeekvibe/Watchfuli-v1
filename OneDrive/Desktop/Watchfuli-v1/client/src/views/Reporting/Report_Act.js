import {connect} from 'react-redux'
import {openCreate, openUpdate, openDelete} from '../../utils/redux/actions/adminActions'
import { closeAppModal } from '../../utils/redux/actions/appActions'
import { unhideHeader } from '../../utils/redux/actions/adminActions'
import { closeReport, openRepModal } from '../../utils/redux/actions/reportAction'

const Report_Act = (props) => {
    // console.log('REPORT_ACT', props.report)
    return (
        <>
            <h3 className="dm-title">Reporting</h3>
            <div className='close-modal-btn'>
                <button className="close-btn" onClick={() => {props.closeAppModal(), props.unhideHeader(), props.closeReport()}}>❌</button>
            </div>
            <ul className='man-'>
                <li className='man-action' onClick={() => props.openRepModal()}>Create A Report</li>
                <li className='man-action' onClick={() => props.openUpdate()}>Update A Report</li>
                <li className='man-action' onClick={() => props.openDelete()}>Delete A Report</li>
                <li className='man-action' onClick={() => props.openDelete()}>Assign A Report</li>
                <li className='man-action' onClick={() => props.openDelete()}>Send A Report</li>
            </ul>
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
        closeAppModal : () => dispatch(closeAppModal()),
        unhideHeader : () => dispatch(unhideHeader()),
        closeReport : () => dispatch(closeReport()),
        openRepModal : () => dispatch(openRepModal())
        // openCreate : () => dispatch(openCreate()),
        // openUpdate : () => dispatch(openUpdate()),
        // openDelete : () => dispatch(openDelete())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Report_Act)