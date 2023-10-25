import { CLOSE_REPORT, CLOSE_REP_MODAL, OPEN_REPORT, OPEN_REP_MODAL, REPORT_CHANGE } from "../types";

export const openReport = () => {
    return { type : OPEN_REPORT}
}

export const closeReport = () => {
    return { type : CLOSE_REPORT}
}

export const closeRepModal = () => {
    return { type : CLOSE_REP_MODAL}
}

export const openRepModal = () => {
    return { type : OPEN_REP_MODAL}
}

export const reportChange = (input) => {
    return {
        type : REPORT_CHANGE,
        payload : input,
    }
}