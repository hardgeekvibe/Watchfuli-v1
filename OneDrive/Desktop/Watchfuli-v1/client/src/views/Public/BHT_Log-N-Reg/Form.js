import { connect } from "react-redux"

const Form = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {props.children}
            {props.auth.isPass && <button type="submit">{props.btnText}</button>}
        </form>
    )
}

const mapStateToProps = (state) => {
    return {
        auth : state.auth
    }
}

export default connect(mapStateToProps, null)(Form)