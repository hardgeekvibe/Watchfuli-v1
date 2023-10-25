import { connect } from "react-redux"
import Form from '../../../components/blockComponents/Form'
import { reportChange } from "../../../utils/redux/actions/reportAction"
// import API from '../../utils/api/reportApi'

const CreateReportForm = (props) => {
    // console.log('CREATE', props.report)
    let submit = (e) => {
        e.preventDefault()
        let {typeOfReport, managers, bhts, patients, locations} = props.report
        let dataSet = []
        if (managers == true){
            dataSet.push('managers')
        }
        if (bhts == true){
            dataSet.push('bhts')
        }
        if (patients == true){
            dataSet.push('patients')
        }
        if (locations == true){
            dataSet.push('locations')
        }
        let data = {typeOfReport, dataSet}
        console.log('SUBMIT', data)
        // API.generateReport(data) //<<<<< WTF?????
    }

    return (
        <>
            <h3 className="modal-title">Create Report</h3>
            <hr />

            <Form handleSubmit={submit} btnText='CREATE'>
                <fieldset onChange={(e) => props.reportChange(e.target)}>What type of report?
                    <div>
                        <label name='typeOfReport'>Ratio</label>
                        <input type='radio' name="typeOfReport" value='ratio' />
                        <label name='compare'>Compare</label>
                        <input type='radio' name="typeOfReport" value='compare' />
                    </div>
                </fieldset>
                <fieldset onChange={(e) => props.reportChange(e.target)}>Which datasets?
                    <div>
                        <div><label name='managers'>Managers</label>
                        <input type='checkbox' name="managers" value='managers' /></div>
                        <div><label name='bhts'>BHTs</label>
                        <input type='checkbox' name="bhts" value='bhts' /></div>
                        <div><label name='patients'>Patients</label>
                        <input type='checkbox' name="patients" value='patients' /></div>
                        <div><label name='locations'>Locations</label>
                        <input type='checkbox' name="locations" value='locations' /></div>
                    </div>
                </fieldset>
            </Form>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        report : state.report
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        reportChange: (input) => dispatch(reportChange(input))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateReportForm)