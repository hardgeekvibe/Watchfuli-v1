import { connect } from "react-redux"
import ReportModal from "../../../components/reportComponents/ReportModal"
import CreateReportForm from "./CreateReportForm"


const CreateReportModal = () => {
    return (
        <>
        <ReportModal>
            <CreateReportForm />
        </ReportModal>
        </>
    )
}

export default CreateReportModal