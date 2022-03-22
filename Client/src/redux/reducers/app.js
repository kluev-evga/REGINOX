import {
    SET_APP_STATUS,
    SET_APP_HOME_PAGE,
    SET_APP_IS_POP_UP,
} from '../types';
  
  
const INITIAL_STATE = {
    isHomePage: false,
    isPopUp: false,
    status: null,
    error: null,
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
        default:
        return state;
    }
};

export default appReducer;