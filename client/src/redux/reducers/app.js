import {
    APP_SET_STATUS,
    APP_SET_IS_POP_UP,
    APP_SET_TILES,
    APP_UNSET_TILES,
    APP_OPEN_SEARCH,
    APP_CLOSE_SEARCH
} from '../types';


const INITIAL_STATE = {
    isSearchOpen: false,
    isHomePage: false,
    isPopUp: false,
    status: null,
    error: null,
    isTiles: true,
};

const appReducer = function (state = INITIAL_STATE, action) {
    const { type, status } = action;

    switch (type) {
        case APP_SET_STATUS:
            return {
                ...state,
                status: status
            }
        case APP_SET_IS_POP_UP:
            return {
                ...state,
                isPopUp: status
            }
        case APP_SET_TILES:
            return {
                ...state,
                isTiles: true
            }
        case APP_UNSET_TILES:
            return {
                ...state,
                isTiles: false
            }
        case APP_OPEN_SEARCH:
            return {
                ...state,
                isSearchOpen: true
            }
        case APP_CLOSE_SEARCH:
            return {
                ...state,
                isSearchOpen: false
            }
        default:
            return state;
    }
};

export default appReducer;