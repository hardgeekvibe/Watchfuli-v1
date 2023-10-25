import { connect } from "react-redux"
import AdminModal from "./Admin/AdminModal"
import LoginModal from "./BHT_Log-N-Reg/LoginModal"
import ManagerModal from "./Manager/ManagerModal"
// import {openModal} from '../../utils/redux/actions/authActions'


const Landing = (props) => {
    // console.log('LAND', props.app)
    return (
        <>
            <div className="public-grid">
                <header className="head">
                    <h1 className="head-title">Who are we?</h1>
                    <p className="content-head">Watchfuli, is a staffing and assest managment software that assist home health companies with providing compliance and regulatory auditing services. WatchDog is the software that powers the Watchfuli platform. This is all brought you by <a className="hard">Hard Coded LLC.</a>, the digital technology company that designs and develops the high-performing, high-quality, software and technology platforms.</p>
                    <div className="pic-div">
                        <div>
                            <img
                                src={require('../../utils/images/CSS-3.png')}
                                className='who-pic'
                            />
                        </div>
                        <div>
                            <img
                                src={require('../../utils/images/React.png')}
                                className='who-pic'
                            />
                        </div>
                        <div>
                            <img
                                src={require('../../utils/images/pexels-markus-spiske-2004161.jpg')}
                                className='who-pic'
                            />
                        </div>
                        <div>
                            <img
                                src={require('../../utils/images/JS.png')}
                                className='who-pic'
                            />
                        </div>
                        <div>
                            <img
                                src={require('../../utils/images/HTML-5.png')}
                                className='who-pic'
                            />
                        </div>
                    </div>
                </header>
                <div className="left">
                    <h1 className="problem-title">The Problem.</h1>
                    <p className="content-problem">Health group homes on average are fined by state health department agencies for non-compliance or missing regulatory markers $X per year. This controllable expense directly reduces a company’s level of care and profitability.</p>
                    <div className="chart">📉</div>
                </div>
                <div className="right">
                    <h1 className="solution-title">What We Do!</h1>
                    <p className="content-solution">Utilizing current coding industry standards and practices to design the data savvy WatchDog software to track, check for, and alert of potential compliance and/ or regulatory issues. The user-friendly technology platform Watchfuli, powered by WatchDog software, will provide a centralized interface that a home health care company can perform its own checks of potential issues. Group homes that have higher compliance and regulatory issues rate can partner with <a className="hard-1">Hard Coded LLC.</a> to create a fully intergratable, as well as expandable, WatchDog software that will automate a spectrum of actions to specifically address issues before they are fined.</p>

                </div>
            </div>

            {props.auth.modalOpen && <LoginModal />}
            {props.auth.adminModal && <AdminModal />}
            {props.auth.manModal && <ManagerModal />}
            {/* <h2>Please register or log in to enter.</h2> */}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        app: state.app
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openModal: () => dispatch(openModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)