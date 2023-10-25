import { connect } from 'react-redux'
import MessModal from '../../components/messageComponents/MessModal'
import DMessage from '../Messaging/DMessage'


const DirectModal = () => {
    return ( 
        <>
        <MessModal>
            <DMessage />
        </MessModal>
        </>
    )
}

export default DirectModal