import {connect} from 'react-redux'
import { openCreateBHT } from '../../../utils/redux/actions/adminActions'

const BHTS_Act = (props) => {
    return (
        <>
            <ul>
                <li className='man-action' onClick={() => props.openCreateBHT()}>Create A BHT</li>
                <li className='man-action'
                // onClick={() => props.openUpdateBHT()}
                >Update A BHT</li>
                <li className='man-action' 
                // onClick={() => props.openDeleteBHT()}
                >Delete A BHT</li>
            </ul>
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
        openCreateBHT : () => dispatch(openCreateBHT()),
        openUpdateBHT : () => dispatch(openUpdateBHT()),
        openDeleteBHT : () => dispatch(openDeleteBHT())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BHTS_Act)