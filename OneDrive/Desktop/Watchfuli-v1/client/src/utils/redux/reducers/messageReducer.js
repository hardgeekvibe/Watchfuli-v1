import { CLOSE_MESS, FIND_MESS_TOG, MESS_CHANGE, MESS_SENT, OPEN_DIRECT, OPEN_MESS, OPEN_REPLY, SET_MESS, SET_SENDER } from "../types"


let initialState = {
    employeeId: '',
    email: '',
    message: '',
    isMess: false,
    messTog: false,
    isFound: false,
    recFirstName: '',
    recLastName: '',
    recId: '',
    DM: '',
    isSent: false,
    isReply: false,
    from: '',
    isDirect: false,

}

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MESS:
            return {
                ...state,
                isMess: !state.isMess,
                message: '',
            }
        case CLOSE_MESS:
            return {
                ...state,
                isMess: false,
                employeeId: '',
                email: '',
                message: '',
                isFound: false,
                DM: '',
                isSent: false,
                isReply: false,
                isDirect: false,
                recFirstName: '',
                recLastName: '',
                recId: '',
            }
        case MESS_CHANGE:
            let { name, value, checked, type } = action.payload
            if (type == 'checkbox') {
                return {
                    ...state,
                    [name]: checked
                }
            } else {
                return {
                    ...state,
                    [name]: value,
                }
            }
        case FIND_MESS_TOG:
            return {
                ...state,
                messTog: !state.messTog,
                message: ''
            }
        case SET_MESS:
            return {
                ...state,
                message: action.payload.message
            }
        case SET_SENDER:
            return {
                ...state,
                recFirstName: action.payload.user.firstName,
                recLastName: action.payload.user.lastName,
                recId: action.payload.user._id,
                isFound: true
            }
        case MESS_SENT:
            return {
                ...state,
                recFirstName: action.payload.data.firstName,
                recLastName: action.payload.data.lastName,
                isSent: true
            }
        case OPEN_REPLY:
            return {
                ...state,
                isReply: true,
                from: action.payload.from,
                recId: action.payload.senderId
            }
        case OPEN_DIRECT:
            return {
                ...state,
                isDirect: true,
                recFirstName: action.payload.firstName,
                recLastName: action.payload.lastName,
                recId: action.payload._id
            }
        default:
            return state
    }
}

export default messageReducer