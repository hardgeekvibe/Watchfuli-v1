

const Form = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {props.children}
            <button  type="submit" className='submit-btn'>{props.btnText}</button>
        </form>
    )
}

export default Form