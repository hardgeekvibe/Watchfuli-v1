import {CLOSE_REPORT, CLOSE_REP_MODAL, OPEN_REPORT, OPEN_REP_MODAL, REPORT_CHANGE} from '../types'

let initialState = {
    message: '',
    typeOfReport: '',
    managers: '',
    bhts: '',
    patients: '',
    locations: '',
    // FLAG
    isReport: false,
    openReport: false,
}

const reportReducer = (state = initialState, action) => {
    switch (action.type) {
        case REPORT_CHANGE:
            let { name, value, checked, type } = action.payload
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
                    [name]: value,
                }
            }
        case OPEN_REPORT:
            return {
                ...state,
                isReport: true,
            }
        case CLOSE_REPORT:
            return {
                ...state,
                isReport: false,
            }
        case OPEN_REP_MODAL:
            return {
                ...state,
                openReport: true,
            }
        case CLOSE_REP_MODAL:
            return {
                ...state,
                openReport: false,
            }
        default:
            return state
    }
}

export default reportReducer