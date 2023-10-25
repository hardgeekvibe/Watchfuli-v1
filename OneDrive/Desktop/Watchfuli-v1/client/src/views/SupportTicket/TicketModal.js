import { connect } from "react-redux"
import AppModal from "../../components/appComponents/AppModal"
import TicketForm from "./TicketForm"


const TicketModal = () => {
    return (
        <>
        <AppModal>
            <TicketForm />
        </AppModal>
        </>
    )
}

export default TicketModal