import { FIND_MESS_TOG, MESS_CHANGE, OPEN_MESS, CLOSE_MESS, SET_MESS, SET_SENDER, MESS_SENT, OPEN_REPLY, OPEN_DIRECT } from "../types";

export const messChange = (input) => {
    return {
        type: MESS_CHANGE,
        payload: input
    }
}

export const findMessTog = () => {
    return { type : FIND_MESS_TOG}
}

export const openMess = () => {
    return { type : OPEN_MESS}
}

export const closeMess = () => {
    return { type : CLOSE_MESS}
}

export const openDirect = (contact) => {
    return { 
        type : OPEN_DIRECT,
        payload: contact
     }
}

export const setMess = (message) => {
    return {
        type : SET_MESS,
        payload : message
    }
}

export const setSender = (user) => {
    return {
        type : SET_SENDER,
        payload : user
    }
}

export const messSent = (data) => {
    return {
        type : MESS_SENT,
        payload : data
    }
}

export const openReply = (from) => {
    return { 
        type : OPEN_REPLY,
        payload : from
    }
}

