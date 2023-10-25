import { connect } from 'react-redux'
import { closeRepModal } from '../../utils/redux/actions/reportAction'


const ReportModal = (props) => {
    // console.log('MODAL', props.report)
    return (
        <>
            <div className='underlay'>
                <div className='modal'>
                    <div className='close-modal-btn'>
                        <button className="close-btn" onClick={() => props.closeRepModal()}>❌</button>
                    </div>
                
                    <h2>{props.modalTitle}</h2>
                    {props.children}
                    <div>{props.report.message}</div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        report: state.report
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeRepModal: () => dispatch(closeRepModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportModal)