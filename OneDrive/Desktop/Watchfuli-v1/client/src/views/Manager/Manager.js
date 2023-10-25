import { connect } from "react-redux"
import { openDM } from "../../utils/redux/actions/appActions"
import { openMess } from "../../utils/redux/actions/messageActions"
import ShowDMs from "../Messaging/ShowDMs"
import ReplyModal from "../Messaging/ReplyModal"
import MessageModal from "../Messaging/MessageModal"
import Directory from "../Directory/Directory"
import API from '../../utils/api/appApi'
import DirectModal from "../Directory/DirectModal"
import TicketModal from "../SupportTicket/TicketModal"

const Manager = (props) => {
    // console.log('MAN', props.mess)

    const getDirectory = () => {
        API.getDirect()
    }

    return (
        <>
            <div></div>
            <div className="grid-container">
                <div className="side-nav">
                    <div className="icons">
                        <ul className="column">
                            <li><a onClick={() => props.openMess()}>📧
                                {
                                    props.app.showDM && <span onClick={() => { props.openDM(), props.openMess() }} className="DM-badge">
                                        {props.app.messages.length}
                                    </span>
                                }
                            </a></li>
                            <li><a onClick={() => getDirectory()}>📕</a></li>
                            <li>📥</li>
                            <li>📊</li>
                        </ul>

                    </div>
                </div>
                <div className="body">
                    <div className="body-header">

                    </div>
                    <div className="activity">
                        <div className="DM">{props.app.isDM && <ShowDMs />}</div>
                        <div className="DM">{props.app.showDirect && <Directory />}</div>
                        {props.mess.isReply && <ReplyModal />}
                        {props.mess.isMess && <MessageModal />}
                        {props.mess.isDirect && <DirectModal />}
                        {props.app.showTicket && <TicketModal />}
                    </div>
                </div>
            </div>
        </>

    )
}

const mapStateToProps = (state) => {
    return {
        app: state.app,
        mess: state.mess
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openDM: () => dispatch(openDM()),
        openMess: () => dispatch(openMess()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Manager)