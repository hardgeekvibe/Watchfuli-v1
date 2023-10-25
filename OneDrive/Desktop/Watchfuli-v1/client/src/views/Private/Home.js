import {connect} from 'react-redux'
import Admin from '../Admin/Admin'
import Manager from '../Manager/Manager'
import BHT from '../BHT/BHT'

const Home = (props) => {
    // console.log('HOME', props.app)
    if (props.app.userRole == 'ADMIN'){
        return (
            <>
            <Admin />
            </>
        )
    }
    if (props.app.userRole == 'MGR'){
        return (
            <>
            <Manager />
            </>
        )
    }
    if (props.app.userRole == 'BHT'){
       return (
        <>
        <BHT />
        </>
    ) 
    }
    
}

const mapStateToProps = (state) => {
    return {
        app : state.app
    }
}

export default connect(mapStateToProps, null)(Home)