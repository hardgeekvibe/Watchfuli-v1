import { connect } from "react-redux"
import { appChange } from "../../utils/redux/actions/appActions"
import { v4 as uuid } from 'uuid'
import Form from "../../components/blockComponents/Form"
import API from '../../utils/api/adminApi'


const TicketForm = (props) => {
    // console.log('TICKET', props.app.ticket)
    
    let submit = (e) => {
        e.preventDefault()
        let {ticket, urgency, user} = props.app
        let senderId = user._id
        let senderName = `${user.firstName} ${user.lastName}`
        let number = uuid().slice(0, 9)
        let firstLetter = user.firstName.split('').shift()
        let lastLetter = user.lastName.split('').shift()
        let ticketNumber = `${number}${firstLetter}${lastLetter}`
        let createTicket = { ticket, urgency, senderId, senderName, ticketNumber }
        API.submitTicket(createTicket)
    }
    
    return (
        <>
            <h3 className="modal-title">Tech Support Ticket</h3>
            <hr />
            {
                props.app.isTicket ?
                    <div className="dm-body">
                        <div>Tech Support Ticket #<span className="from-to">{props.app.ticketNum}</span> has been created.</div>
                    </div> :
                    <div className="dm-body ticket">
                        <div>From: <span className="from-to">{props.app.user.firstName} {props.app.user.lastName}</span></div>
                        <div>To: <span className="from-to">Tech Support</span></div>
                        <br />
                        <Form handleSubmit={submit} btnText='SUBMIT'>
                            <label>Description of Issue:</label>
                            <textarea 
                                name='ticket'
                                value={props.app['ticket']}
                                cols='30'
                                rows='10'
                                placeholder="What is the issue..."
                                onChange={(e) => props.appChange(e.target)}
                                required={true}
                            />
                            <fieldset className="urgency" onChange={(e) => props.appChange(e.target)}>
                                <label name='urgency'>Urgency: </label>
                                <input type='radio' name="urgency" value={1}/>1
                                <input type='radio' name="urgency" value={2}/>2
                                <input type='radio' name="urgency" value={3}/>3
                                <input type='radio' name="urgency" value={4}/>4
                                <input type='radio' name="urgency" value={5}/>5
                            </fieldset>
                        </Form>
                    </div>
            }
            <div>{props.app.message}</div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        app : state.app
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        appChange : (input) => dispatch(appChange(input))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketForm)