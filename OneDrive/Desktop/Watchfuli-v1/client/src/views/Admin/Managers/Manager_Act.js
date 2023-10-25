import {connect} from 'react-redux'
import {openCreate, openUpdate, openDelete} from '../../../utils/redux/actions/adminActions'


const Manager_Act = (props) => {
    // console.log('MANAGER_ACT', props.admin)
    return (
        <>
            <ul className='man-'>
                <li className='man-action' onClick={() => props.openCreate()}>Create A Manager</li>
                <li className='man-action' onClick={() => props.openUpdate()}>Update A Manager</li>
                <li className='man-action' onClick={() => props.openDelete()}>Delete A Manager</li>
            </ul>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        admin : state.admin
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openCreate : () => dispatch(openCreate()),
        openUpdate : () => dispatch(openUpdate()),
        openDelete : () => dispatch(openDelete())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Manager_Act)