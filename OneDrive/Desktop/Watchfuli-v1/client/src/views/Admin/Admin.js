import { connect } from 'react-redux'
import Manager_Act from './Managers/Manager_Act'
import { openMess } from '../../utils/redux/actions/messageActions'
import { openPat, openLoc, openMan, openBHT, hideHeader } from '../../utils/redux/actions/adminActions'
import {openReport} from '../../utils/redux/actions/reportAction'
import CreateModal from './Managers/CreateModal/CreateModal'
import UpdateModal from './Managers/UpdateModal/UpdateModal'
import DeleteModal from './Managers/DeleteModal/DeleteModal'
import BHTS_Act from './BHTS/BHTS_Act'
import CreateBHTModal from './BHTS/CreateBHTModal/CreateBHTModal'
import MessageModal from '../Messaging/MessageModal'
import Directory from "../Directory/Directory"
import API from '../../utils/api/appApi'
import DirectModal from "../Directory/DirectModal"
import Patients_Act from '../Admin/Patients/Patients_Act'
import Locations_Act from '../Admin/Locations/Locations_Act'
import Report_Act from '../Reporting/Report_Act'
import CreateReportModal from '../Reporting/CreateReport/CreateReportModal'

const Admin = (props) => {
    // console.log('ADMIN', props.admin)

    const getDirectory = (props) => {
        API.getDirect()
    }

    return (
        <>
            <div></div>
            <div className="grid-container">
                <div className="side-nav">
                    <div className="icons">
                        <ul className='column'>
                            <li><a onClick={() => props.openMess()}>📧</a></li>
                            <li><a onClick={() => {getDirectory(), props.hideHeader()}}>📕</a></li>
                            <li><a>📥</a></li>
                            <li><a onClick={() => {props.openReport(), props.hideHeader()}}>📊</a></li>
                        </ul>

                    </div>
                </div>
                <div className="body">
                    {
                        !props.admin.isHeader ?
                            <div className='body-header'>
                                <div className='circle man' onClick={() => props.openMan()}>
                                    <div className='dept'>MANAGERS</div>
                                </div>
                                <div className='circle' onClick={() => props.openBHT()}>
                                    <div className='dept bhts'>BHTS</div>
                                </div>
                                <div className='circle' onClick={() => props.openPat()}>
                                    <div className='dept pats'>PATIENTS</div>
                                </div>
                                <div className='circle' onClick={() => props.openLoc()}>
                                    <div className='dept locs'>LOCATIONS</div>
                                </div>
                            </div> : null
                    }

                    <div className='activity'>
                        {/* MANAGER */}
                        {props.admin.isMan && <Manager_Act />}
                        {props.admin.isCreate && <CreateModal />}
                        {props.admin.isEdit && <UpdateModal />}
                        {props.admin.isUpdated && <DisplayUpdate />}
                        {props.admin.isDelete && <DeleteModal />}
                        {/* BHT */}
                        {props.admin.isBHT && <BHTS_Act />}
                        {props.admin.isCreateBHT && <CreateBHTModal />}
                        {/* PATIENTS */}
                        {props.admin.isPat && <Patients_Act />}
                        {/* LOCATIONS */}
                        {props.admin.isLoc && <Locations_Act />}
                        {/* MESSAGING */}
                        {props.mess.isMess && <MessageModal />}
                        {/* DIRECTORY */}
                        <div className="DM">{props.app.showDirect && <Directory />}</div>
                        {props.mess.isDirect && <DirectModal />}
                        {/* REPORT */}
                        <div className='DM'>{props.report.isReport && <Report_Act />}</div>
                        {props.report.openReport && <CreateReportModal />}
                    </div>
                </div>
            </div>
        </>

    )
}

const mapStateToProps = (state) => {
    return {
        app: state.app,
        mess: state.mess,
        admin: state.admin,
        report: state.report
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openMan: () => dispatch(openMan()),
        openBHT: () => dispatch(openBHT()),
        openMess: () => dispatch(openMess()),
        openPat: () => dispatch(openPat()),
        openLoc: () => dispatch(openLoc()),
        openReport: () => dispatch(openReport()),
        hideHeader: () => dispatch(hideHeader()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin)