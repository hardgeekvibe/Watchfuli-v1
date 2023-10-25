import { connect } from "react-redux"
import { closeAppModal } from "../../utils/redux/actions/appActions"
import { openReply } from "../../utils/redux/actions/messageActions"
import API from '../../utils/api/messApi'

const ShowDMs = (props) => {
    // console.log('MESSAGE', props.app.messages)
    const deleteDM = (e, _id) => {
        e.preventDefault()
        API.deleteDM({_id})
    }
    return (
        <>
            <h3 className="dm-title">Direct Messages</h3>
            <div className='close-modal-btn'>
                <button className="close-btn" onClick={() => props.closeAppModal()}>❌</button>
            </div>
            {
                props.app.messages.map(email =>
                    <div className="message" key={email._id}>
                        <h4>{email.from}</h4>
                        <p>{email.message}</p>
                        <div className="btn-div">
                            <button className="delete-btn" onClick={(e) => deleteDM(e, email._id)}>DELETE</button>
                            <button className="reply-btn" onClick={() => props.openReply(email)}>REPLY</button>
                        </div>
                    </div>
                    )
            }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        app: state.app
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeAppModal: () => dispatch(closeAppModal()),
        openReply: (from) => dispatch(openReply(from))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowDMs)