import { ADMIN, AUTH_CHANGE, CLOSE_MODAL, LOG_TOGGLE, MANAGER, OPEN_MODAL, PHONE_TOGGLE, SET_MESSAGE } from '../types'

let initialState = {
    firstName: '',
    lastName: '',
    adminId: '',
    phoneNum: '',
    email: '',
    password1: '',
    password2: '',
    password: '',
    _id: '',
    message: '',
    isMessage: false,
    modalOpen: false,
    login: true,
    isNum: false,
    adminModal: false,
    manModal: false,
    // PASSWORD
    isPassNum: false,
    isPassSym: false,
    isSix: false,
    isPass: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_CHANGE:
            let { name, value, checked, type } = action.payload
            //<<< checkbox conditional statements
            let passwordStr = value
            let var1 = ''
            let var2 = ''
            let var3 = ''
            let var4 = ''

            if (name == 'password2') {
                passwordStr.match(/[0-9]+/) ? var1 = true : var1 = false
                passwordStr.match(/\W+/) ? var2 = true : var2 = false
                passwordStr.length >= 6 ? var3 = true : var3 = false
                if (var1 == true && var2 == true && var3 == true) {
                    var4 = true
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
                    [name]: value,
                    isPassNum: var1,
                    isPassSym: var2,
                    isSix: var3,
                    isPass: var4
                }
            }
        case OPEN_MODAL:
            return {
                ...state,
                modalOpen: true,

            }
        case CLOSE_MODAL:
            return {
                ...state,
                firstName: '',
                lastName: '',
                phoneNum: '',
                email: '',
                password1: '',
                password2: '',
                password: '',
                message: '',
                adminId: '',
                modalOpen: false,
                login: true,
                adminModal: false,
                manModal: false,
                isPassNum: false,
                isPassSym: false,
                isSix: false,
                isPass: false,
                isMessage: false,
                message: '',
            }
        case LOG_TOGGLE:
            return {
                ...state,
                firstName: '',
                lastName: '',
                phoneNum: '',
                email: '',
                password1: '',
                password2: '',
                password: '',
                isMessage: false,
                message: '',
                modalOpen: true,
                login: !state.login,
                isPassNum: false,
                isPassSym: false,
                isSix: false,
                isPass: false,
            }
        case SET_MESSAGE:
            return {
                ...state,
                isMessage: true,
                message: action.payload.message
            }
        case PHONE_TOGGLE:
            return {
                ...state,
                phoneNum: '',
                email: '',
                password: '',
                isNum: !state.isNum,
                isMessage: false,
                message: '',
            }
        case ADMIN:
            return {
                ...state,
                adminModal: !state.adminModal,
                manModal: false,
            }
        case MANAGER: {
            return {
                ...state,
                manModal: !state.manModal,
                adminModal: false,
            }
        }
        default:
            return state
    }
}

export default authReducer