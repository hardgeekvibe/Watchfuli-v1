import { connect } from "react-redux"
import { closeAppModal } from "../../utils/redux/actions/appActions"
import { manager } from "../../utils/redux/actions/authActions"
import { openDirect } from "../../utils/redux/actions/messageActions"
import AppTextInput from "../../components/appComponents/AppTextInput"
import { unhideHeader } from "../../utils/redux/actions/adminActions"


const Directory = (props) => {
    // console.log('DI', props.app.directory)
    let contacts = props.app.directory
    // let filterContacts = []  //>>>>>>>>>>>>>>>>>>>>>>>>>>   FILTER FEATURE
    // const filterManager = (props) => {
    //     contacts.filter(managers => {
    //         if (managers.role == 'MGR') {
    //             filterContacts.push(managers)
    //             console.log('MANAGER', filterContacts)
    //         }
    //     })
    // }

    return (
        <>
            <h3 className="dm-title">Directory</h3>
            <div className='close-modal-btn'>
                <button className="close-btn" onClick={() => {props.closeAppModal(), props.unhideHeader()}}>❌</button>
            </div>
            <div className="filter">
                <div className="role"><a onClick={() => filterManager()}>MANAGER</a></div>
                <div className="role"><a>BHT</a></div>
                <div className="role"><a>ADMIN</a></div>
                <div className="role"><a>ALL</a></div>
            </div>
            <div><AppTextInput /> <a>🔎</a></div>
            <div className="contact-cards">
                {
                    contacts.map(contact => {
                        let fullRole = ''
                        if (contact.role == 'MGR') {
                            fullRole = 'Manager'
                        }
                        if (contact.role === 'BHT') {
                            fullRole = 'Behavioral Health Tech'
                        }
                        if (contact.role == 'ADMIN') {
                            fullRole = 'System Administrator'
                        }
                        return (
                            <div className="contact" key={contact._id}>
                                <h3>Name: {contact.firstName} {contact.lastName}</h3>
                                <h5>Employee Id: {contact.employeeId}</h5>
                                <h5>E-Mail: {contact.email}</h5>
                                <h5>Phone Number: {contact.phoneNum}</h5>
                                <h5>Role: {fullRole}</h5>
                                <div className="btn-div">
                                    {/* <button className="delete-btn" onClick={(e) => deleteDM(e, email._id)}>DELETE</button> */}
                                    <button className="reply-btn" onClick={() => props.openDirect(contact)}>MESSAGE</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        app: state.app
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeAppModal: () => dispatch(closeAppModal()),
        openDirect: (contact) => dispatch(openDirect(contact)),
        unhideHeader : () => dispatch(unhideHeader()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Directory)