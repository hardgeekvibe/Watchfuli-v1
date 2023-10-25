import { APP_CHANGE, CLOSE_APP_MODAL, LOGOUT, NOW_ADMIN, NOW_USER, SET_APP_MESS, OPEN_DM, GET_DIRECT, OPEN_TICKET, TICKET_CREATED } from "../types"


let initialState = {
    user: {},
    tasks: [],
    messages: [],
    firstName: '',
    lastName: '',
    employeeId: '',
    phoneNum: '',
    email: '',
    password1: '',
    password2: '',
    password: '',
    message: '',
    _id: '',
    admin: '',
    userRole: '',
    tickets: [],
    isAuth: false,
    default: false,
    findTog: false,
    found: false,
    editFirstName: '',
    editLastName: '',
    editPhoneNum: '',
    editEmail: '',
    editUserRole: '',
    edit_id: '',
    passTog: false,
    updated: false,
    //DIRECTORY
    directory: [],
    showDirect: false,
    //MODALS
    isMan: false,
    isCreate: false,
    isEdit: false,
    //>>>DELETE MODAL
    isDelete: false,
    isSure: false,
    delete_id: '',
    //>>> BHTS
    // isBHT: false,
    // isCreateBHT: false,
    // createBHT: false,
    //MESSAGES
    showDM: false,
    isDM: false,
    //SUPPORT TICKET
    showTicket: false,
    ticket: '',
    urgency: 0,
    isTicket: false,
    ticketNum: '',

}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case NOW_USER:
            let { firstName, lastName, phoneNum, email, employeeId, _id, tasks, messages, role } = action.payload.user
            if (messages.length > 0) {
                state.showDM = true
            } else {
                state.showDM = false
            }
            return {
                ...state,
                user: Object.assign(state.user, { firstName, lastName, phoneNum, email, employeeId, _id }),
                tasks,
                messages,
                userRole: role,
                isAuth: true,
                showDirect: false,
                isDM: false,
            }
        case LOGOUT:
            return {
                ...state,
                user: {},
                tasks: [],
                messages: [],
                firstName: '',
                lastName: '',
                employeeId: '',
                phoneNum: '',
                email: '',
                password1: '',
                password2: '',
                password: '',
                message: '',
                _id: '',
                userRole: '',
                isAuth: false,
                isMan: false,
                editUserRole: '',
                delete_id: '',
                showDirect: false,
                isDM: false,
                showTicket: false,
                ticket: '',
                urgency: 0,
                isTicket: false,
                ticketNum: '',
            }
        case NOW_ADMIN: //<<<<<ADMIN
            return {
                ...state,
                admin: action.payload.admin.adminId,
                tickets: action.payload.admin.tickets,
                userRole: action.payload.admin.role,
                _id: action.payload.admin._id,
                isAuth: true
            }
        case APP_CHANGE:
            // console.log('INPUT', action.payload)
            let { name, value, checked, type } = action.payload
            //<<< checkbox conditional statements
            if (value === 'false') {
                state.default = false
            }
            if (value === 'true') {
                state.default = true
            }
            if (type == 'radio'){
                return {
                    ...state,
                    [name]: value,
                }
            }
            if (type == 'checkbox') {
                return {
                    ...state,
                    [name]: checked
                }
            } else {
                return {
                    ...state,
                    [name]: value
                }
            }
        case CLOSE_APP_MODAL:
            return {
                ...state,
                firstName: '',
                lastName: '',
                employeeId: '',
                phoneNum: '',
                email: '',
                password1: '',
                password2: '',
                password: '',
                message: '',
                isAuth: true,
                isMan: false,
                isCreate: false,
                created: false,
                setUserRole: '',
                default: false,
                isEdit: false,
                findTog: false,
                found: false,
                editUserRole: '',
                edit_id: '',
                passTog: false,
                isDelete: false,
                isSure: false,
                delete_id: '',
                isConfirm: false,
                deleteMessage: '',
                isCreateBHT: false,
                isDM: false,
                showDM: true,

                showDirect: false,
                directory: [],
                isDirect: false,
                showTicket: false,
                ticket: '',
                urgency: 0,
                isTicket: false,
                ticketNum: '',
            }
        case SET_APP_MESS:
            // console.log('MESS', action.payload)
            return {
                ...state,
                message: action.payload.message
            }
        case OPEN_DM:
            return {
                ...state,
                isDM: true,
                showDM: false,
                showDirect: false,
            }
        case GET_DIRECT:
            return {
                ...state,
                showDirect: true,
                directory: action.payload.employees,
                isDM: false,
            }
        case OPEN_TICKET:
            return {
                ...state,
                showTicket: true,
            }
        case TICKET_CREATED:
            return {
                ...state,
                isTicket: true,
                ticketNum: action.payload
            }
        default:
            return {
                ...state,
            }
    }
}

export default appReducer