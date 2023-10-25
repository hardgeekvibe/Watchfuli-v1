import { connect } from "react-redux"
import MessModal from "../../components/messageComponents/MessModal"
import FindRec from "./FindRec"
import DMessage from './DMessage'


const MessageModal = (props) => {
    // console.log('MESSAGE', props.mess)
    return (
        <>
            <MessModal>
                {props.mess.isFound ? <DMessage /> : <FindRec />}
            </MessModal>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        mess: state.mess
    }
}

export default connect(mapStateToProps, null)(MessageModal)