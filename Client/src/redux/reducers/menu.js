import {
    REQUEST,
    SUCCESS,
    FAILURE,
    LOAD_MENU,
    OPEN_MAIN_MENU,
    OPEN_FILTERS_MENU,
    CLOSE_MENU
} from '../types';


const INITIAL_STATE = {
    loading: false,
    loaded: false,
    error: null,
    isOpen: false,
    isMainMenu: true,
};

const menuReducer = function (state = INITIAL_STATE, action) {
  const { type, data, error } = action;

  switch (type) {
      case LOAD_MENU + REQUEST:
          return {
              ...state,
              loading: true,
              error: null,
          };
      case LOAD_MENU + SUCCESS:
      return {
          ...state,
          links: data.links,
          categories: data.categories,
          loading: false,
          loaded: true,
      };
      case LOAD_MENU + FAILURE:
      return {
          ...state,
          loading: false,
          loaded: false,
          error: error
      };
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