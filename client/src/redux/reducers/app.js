import {
    APP_SET_TILES,
    APP_UNSET_TILES,
    APP_OPEN_SEARCH,
    APP_CLOSE_SEARCH,
    APP_SET_ERROR,
    APP_UNSET_ERROR
} from '../types'


const INITIAL_STATE = {
    isSearchOpen: false,
    isHomePage: false,
    error: null,
    isTiles: true,
}

const appReducer = function (state = INITIAL_STATE, action) {
    const { type } = action;

    switch (type) {
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
        case APP_SET_ERROR:
            return {
                ...state,
                error: true
            }
        case APP_UNSET_ERROR:
            return {
                ...state,
                error: false
            }
        default:
            return state;
    }
}

export default appReducer