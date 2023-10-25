import { connect } from 'react-redux'
import { closeModal } from '../../utils/redux/actions/authActions'


const AuthModal = (props) => {
    // console.log('MODAL', props.auth)
    return (
        <>
            <div className='underlay'>
                <div className='modal'>
                    <div className='close-modal-btn'>
                        <button className="close-btn" onClick={() => props.closeModal()}>❌</button>
                    </div>

                    <h2 className='modal-title'>{props.modalTitle}</h2>
                    {props.children}
                    {
                        props.auth.isMessage && <div className='message'>{props.auth.message}</div>
                    }
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthModal)