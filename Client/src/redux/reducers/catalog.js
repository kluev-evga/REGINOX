import {REQUEST, SUCCESS, FAILURE, LOAD_CATALOG} from '../types';
import { arrToMap } from '../utils';


const INITIAL_STATE = {
  entities: null,
  loading: true,
  loaded: false,
  error: null,
}

const catalogReducer = function (state = INITIAL_STATE, action) {
  const { type, data, error } = action;

  switch (type) {
    case LOAD_CATALOG + REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOAD_CATALOG + SUCCESS:
      return {
        ...state,
        entities: arrToMap(data),
        loading: false,
        loaded: true,
      };
    case LOAD_CATALOG + FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: error
      };
    default:
      return state;
  }
};

export default catalogReducer;