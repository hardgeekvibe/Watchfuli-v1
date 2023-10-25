import { ADMIN_CHANGE, CLOSE_ADMIN_MODAL, UPDATE_MANAGER, OPEN_CREATE, OPEN_UPDATE, OPEN_DELETE, SET_ADMIN_MESS, SET_MANAGER, FIND_TOGGLE, FOUND_MANAGER, PASS_TOGGLE, CONFIRM, OPEN_PAT, OPEN_LOC, OPEN_MAN, OPEN_BHT, OPEN_CREATE_BHT, HIDE_HEADER, UNHIDE_HEADER} from "../types";

export const adminChange = (input) => {
    return {
        type: ADMIN_CHANGE,
        payload : input
    }
}

export const hideHeader = () => {
    return { type : HIDE_HEADER}
}

export const unhideHeader = () => {
    return { type : UNHIDE_HEADER}
}

export const closeAdminModal = () => {
    return { type: CLOSE_ADMIN_MODAL }
}

export const openCreate = () => {
    return { type : OPEN_CREATE}
}

export const openUpdate = () => {
    return { type : OPEN_UPDATE}
}

export const openDelete = () => {
    return { type : OPEN_DELETE}
}

export const findToggle = () => {
    return { type : FIND_TOGGLE}
}

export const passToggle = () => {
    return { type : PASS_TOGGLE}
}

export const openMan = () => {
    return { type : OPEN_MAN}
}

export const openBHT = () => {
    return { type: OPEN_BHT}
}

export const openCreateBHT = ()=> {
    return { type : OPEN_CREATE_BHT }
}

export const openPat = () => {
    return { type : OPEN_PAT }
}

export const openLoc = () => {
    return { type : OPEN_LOC }
}

export const setAdminMess = (message) => {
    return {
        type: SET_ADMIN_MESS,
        payload: message
    }
}

export const foundManager = (manager) => {
    return { 
        type : FOUND_MANAGER,
        payload : manager
    }
}

export const setManager = (user) => {
    return {
        type : SET_MANAGER,
        payload : user
    }
}

export const updateManager = (user) => {
    return {
        type : UPDATE_MANAGER,
        payload : user
    }
}

export const confirm = (message) => {
    return {
        type : CONFIRM,
        payload : message,
    }
}