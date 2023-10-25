import { ADMIN_CHANGE, CLOSE_ADMIN_MODAL, OPEN_CREATE, UPDATE_MANAGER, OPEN_UPDATE, OPEN_DELETE, SET_ADMIN_MESS, SET_MANAGER, FIND_TOGGLE, FOUND_MANAGER, PASS_TOGGLE, CONFIRM, OPEN_PAT, OPEN_LOC, OPEN_MAN, OPEN_BHT, OPEN_CREATE_BHT, HIDE_HEADER, UNHIDE_HEADER, } from "../types";

let initialState = {
    admin: '',
    tasks: [],
    tickets: [],
    messages: [],
    firstName: '',
    lastName: '',
    employeeId: '',
    phoneNum: '',
    email: '',
    password1: '',
    password2: '',
    userRole: '',
    editUserRole: '',
    edit_id: '',
    message: '',
    _id: '',
    delete_id: '',
    deleteMessage: '',
    // FLAGS
    isHeader: false,
    findTog: false,
    isMessage: false,
    isCreate: false,
    isEdit: false,
    isDelete: false,
    isConfirm: false,
    isSure: false,
    created: false,
    default: false,
    updated: false,
    isPat: false,
    isLoc: false,
    isMan: false,
    isBHT: false,
    isCreateBHT: false,
    createdBHT: false, //<<<<FINISH???
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADMIN_CHANGE:
            let { name, value, checked, type } = action.payload
            //<<< checkbox conditional statements
            if (value === 'false') {
                state.default = false
            }
            if (value === 'true') {
                state.default = true
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
        case CLOSE_ADMIN_MODAL:
            return {
                ...state,
                firstName: '',
                lastName: '',
                employeeId: '',
                phoneNum: '',
                email: '',
                password1: '',
                password2: '',
                userRole: '',
                editUserRole: '',
                edit_id: '',
                message: '',
                _id: '',
                isCreate: false,
                isEdit: false,
                isDelete: false,
                isConfirm: false,
                created: false,
                default: false,
                findTog: false,
                isSure: false,
                found: false,
                isPat: false,
                isLoc: false,
                isMan: false,
                isBHT: false,
                isCreateBHT: false,
            }
        case OPEN_CREATE:
            return {
                ...state,
                isCreate: true,
                message: '',
            }

        case OPEN_UPDATE:
            return {
                ...state,
                isEdit: true,
                message: '',
            }
        case OPEN_DELETE:
            return {
                ...state,
                isDelete: true,
                message: ''
            }
        case SET_ADMIN_MESS:
            return {
                ...state,
                message: action.payload.message
            }
        case FIND_TOGGLE:
            return {
                ...state,
                findTog: !state.findTog,
                email: '',
                employeeId: '',
                message: ''
            }
        case PASS_TOGGLE:
            return {
                ...state,
                passTog: !state.passTog
            }
        case SET_MANAGER:
            return {
                ...state,
                firstName: action.payload.user.firstName,
                lastName: action.payload.user.lastName,
                employeeId: action.payload.user.employeeId,
                phoneNum: action.payload.user.phoneNum,
                email: action.payload.user.email,
                editUserRole: action.payload.user.editUserRole,
                message: action.payload.user.message,
                created: true,
                updated: true,
                isCreate: true,
                isEdit: false,
            }
        case FOUND_MANAGER:
            if (state.isDelete == true) {
                return {
                    ...state,
                    firstName: action.payload.manager.firstName,
                    lastName: action.payload.manager.lastName,
                    delete_id: action.payload.manager._id,
                    isSure: true,
                }
            } else {
                return {
                    ...state,
                    firstName: action.payload.manager.firstName,
                    lastName: action.payload.manager.lastName,
                    phoneNum: action.payload.manager.phoneNum,
                    email: action.payload.manager.email,
                    editUserRole: action.payload.manager.role,
                    edit_id: action.payload.manager._id,
                    found: true,
                    isEdit: true,
                    findTog: false,
                    isMan: false,
                    message: '',
                }
            }
        case CONFIRM:
            return {
                ...state,
                isConfirm: true,
                deleteMessage: action.payload.message
            }
        case UPDATE_MANAGER:
            return {
                ...state,
            }
        case OPEN_PAT:
            return {
                ...state,
                isPat: !state.isPat,
                isLoc: false,
                isMan: false,
                isBHT: false,
            }
        case OPEN_LOC:
            return {
                ...state,
                isLoc: !state.isLoc,
                isPat: false,
                isMan: false,
                isBHT: false,
            }
        case OPEN_MAN:
            return {
                ...state,
                isMan: !state.isMan,
                isBHT: false,
                isLoc: false,
                isPat: false,
            }
        case OPEN_BHT:
            return {
                ...state,
                isBHT: !state.isBHT,
                isMan: false,
                isLoc: false,
                isPat: false,
            }
        case OPEN_CREATE_BHT:
            return {
                ...state,
                isCreateBHT: !state.isCreateBHT
            }
        case HIDE_HEADER:
            return {
                ...state,
                isHeader: true,
            }
        case UNHIDE_HEADER:
            return {
                ...state,
                isHeader: false,
            }
        default:
            return {
                ...state
            }
    }
}

export default adminReducer