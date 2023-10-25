import { connect } from 'react-redux'
import { closeMess } from '../../utils/redux/actions/messageActions'


const MessModal = (props) => {
    // console.log('MODAL', props.auth)
    return (
        <>
            <div className='underlay'>
                <div className='modal'>
                    <div className='close-modal-btn'>
                        <button className="close-btn" onClick={() => props.closeMess()}>❌</button>
                    </div>
                
                    <h2>{props.modalTitle}</h2>
                    {props.children}
                    <div>{props.mess.message}</div>
                </div>
            </div>
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
        closeMess: () => dispatch(closeMess())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessModal)