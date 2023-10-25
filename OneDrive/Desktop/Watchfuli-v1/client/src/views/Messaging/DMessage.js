import { connect } from "react-redux"
import Form from "../../components/blockComponents/Form"
import MessTextArea from "../../components/messageComponents/MessTextArea"
import API from '../../utils/api/messApi'


const DMessage = (props) => {
    // console.log('DM-APP', props.app)
    // console.log('DM-MESS', props.mess)

    let from = ''
    if (props.app.admin !== '') {
        from = props.app.admin
    } else {
        from = `${props.app.user.firstName} ${props.app.user.lastName}`
    }

    const submit = (e) => {
        e.preventDefault()
        let senderId = props.app.user._id
        let { recId, DM } = props.mess
        let message = Object.assign({}, { senderId, from, recId, DM })
        API.addDM(message)
    }

    return (
        <>
                <h3 className="modal-title">Direct Message</h3>
                <hr/>
            {
                props.mess.isSent ?
                    <div className="dm-body">
                        <div>Your message was sent to <span className="from-to">{props.mess.recFirstName} {props.mess.recLastName}</span> .</div>
                    </div> :
                    <div className="dm-body">
                        <div>From: <span className="from-to">{from}</span></div>
                        <div>To: <span className="from-to">{props.mess.recFirstName} {props.mess.recLastName}</span></div>
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

        </>
    )
}

const mapStateToProps = (state) => {
    return {
        mess: state.mess,
        app: state.app,
        auth: state.auth
    }
}

export default connect(mapStateToProps, null)(DMessage)