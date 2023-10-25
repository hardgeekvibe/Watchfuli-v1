import { connect } from "react-redux"
import MessModal from "../../components/messageComponents/MessModal"
import Form from "../../components/blockComponents/Form"
import MessTextArea from "../../components/messageComponents/MessTextArea"
import API from '../../utils/api/messApi'

const ReplyModal = (props) => {
    // console.log('REPLY', props.mess)
    // console.log('REPLY-APP', props.app)
    let submit = (e) => {
        e.preventDefault()
        let senderId = props.app.user._id
        let from = `${props.app.user.firstName} ${props.app.user.lastName}`
        let { DM, recId } = props.mess
        let message = Object.assign({}, { senderId, from, recId, DM })
        API.addDM(message) 
    }
    return (
        <>
            <MessModal>
                <h3 className="modal-title">Reply</h3>
                <hr/>
                {
                    props.mess.isSent ?
                    <div className="dm-body"> 
                        <div>Your message was sent to <span className="from-to">{props.mess.recFirstName} {props.mess.recLastName}</span>.</div>
                    </div> :
                    <div className="dm-body">
                        <div>From: <span className="from-to">{props.app.user.firstName} {props.app.user.lastName}</span></div>
                        <div>To: <span className="from-to">{props.mess.from}</span></div>
                        <br />
                        <Form handleSubmit={submit} btnText='SEND'>
                            <MessTextArea
                                name='DM'
                                cols='30'
                                rows='10'
                                placeholder=' Type direct message here...'
                            />
                        </Form>
                    </div>
                }
            </MessModal>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        app: state.app,
        mess: state.mess
    }
}

export default connect(mapStateToProps, null)(ReplyModal)