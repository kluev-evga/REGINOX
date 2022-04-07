import {
    SET_APP_STATUS,
    SET_APP_HOME_PAGE,
    SET_APP_IS_POP_UP,
    SET_APP_TILES,
    UNSET_APP_TILES
} from '../types';


const INITIAL_STATE = {
    isHomePage: false,
    isPopUp: false,
    status: null,
    error: null,
    isTiles: true,
};

const appReducer = function (state = INITIAL_STATE, action) {
    const { type, status } = action;

    switch (type) {
        case SET_APP_STATUS:
            return {
                ...state,
                status: status
            }
        case SET_APP_HOME_PAGE:
            return {
                ...state,
                isHomePage: status
            }
        case SET_APP_IS_POP_UP:
            return {
                ...state,
                isPopUp: status
            }
        case SET_APP_TILES:
            return {
                ...state,
                isTiles: true
            }
        case UNSET_APP_TILES:
            return {
                ...state,
                isTiles: false
            }
        default:
        return state;
    }
};

export default appReducer;