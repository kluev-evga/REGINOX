import { OPEN_MAIN_MENU, OPEN_FILTERS_MENU, CLOSE_MENU } from '../types';


const INITIAL_STATE = {
    isOpen: false,
    isMainMenu: true,
}

const menuReducer = function (state = INITIAL_STATE, action) {
  const { type } = action;

  switch (type) {
    case OPEN_MAIN_MENU:
        return {
            ...state,
            isMainMenu: true,
            isOpen: true,
        };
    case OPEN_FILTERS_MENU:
        return {
            ...state,
            isMainMenu: false,
            isOpen: true,
        };
    case CLOSE_MENU:
        return {
            ...state,
            isOpen: false,
        };
    default:
      return state;
  }
};

export default menuReducer;