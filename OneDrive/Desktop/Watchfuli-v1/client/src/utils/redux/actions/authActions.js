import { ADMIN, AUTH_CHANGE, CLOSE_MODAL, LOG_TOGGLE, MANAGER, OPEN_MODAL, PHONE_TOGGLE, SET_MESSAGE } from "../types";

export const authChange = (input) => {
    return {
        type : AUTH_CHANGE,
        payload : input
    }
}

export const logToggle = () => {
    return { type : LOG_TOGGLE }
}

export const openModal = () => {
    return { type : OPEN_MODAL }
}

export const closeModal = () => {
    return { type : CLOSE_MODAL}
}

export const setMessage = (message) => {
    return {
        type : SET_MESSAGE,
        payload : message
    }
}

export const phoneToggle = () => {
    return  { type : PHONE_TOGGLE }
}

export const admin = () => {
    return { type : ADMIN}
}

export const manager = () => {
    return {type : MANAGER}
}