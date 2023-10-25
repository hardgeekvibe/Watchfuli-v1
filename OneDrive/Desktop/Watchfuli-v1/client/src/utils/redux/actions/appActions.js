import { APP_CHANGE, CLOSE_APP_MODAL, GET_DIRECT, LOGOUT, NOW_ADMIN, NOW_USER, OPEN_DM, OPEN_TICKET, SET_APP_MESS, TICKET_CREATED} from "../types";


export const logout = () => {
    return { type : LOGOUT}
}

export const openDM = () => {
    return { type : OPEN_DM}
}

export const openTicket = () => {
    return { type: OPEN_TICKET }
}

export const ticketCreated = (tickNum) => {
    return { 
        type : TICKET_CREATED,
        payload: tickNum
    }
}

export const nowUser = (user) => {
    return {
        type : NOW_USER,
        payload : user
    }
}

export const appChange = (input) => {
    return {
        type : APP_CHANGE,
        payload : input
    }
}

export const closeAppModal = () => {
    return {
        type : CLOSE_APP_MODAL
    }
}

export const setAppMess = (message) => {
    return {
        type : SET_APP_MESS,
        payload : message
    }
}

export const nowAdmin = (user) => { //<<<<<ADMIN
    return {
        type : NOW_ADMIN,
        payload : user
    }
}

export const getDirect = (direct) => {
    return {
        type : GET_DIRECT,
        payload : direct
    }
}
