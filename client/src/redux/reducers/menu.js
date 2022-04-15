import { REQUEST, SUCCESS, FAILURE, LOAD_MENU } from '../types'


const INITIAL_STATE = {
    links: [],
    categories: [],
    loading: false,
    loaded: false,
    error: null,
}

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
    default:
      return state;
  }
}

export default menuReducer