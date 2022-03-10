import {REQUEST, SUCCESS, FAILURE, LOAD_CATALOGS} from '../types';
import { arrToMap } from '../utils';

const INITIAL_STATE = {
  entities: {},
  total: null,
  loading: false,
  error: null
}

const catalogReducer = function (state = INITIAL_STATE, action) {
  const { type, data, error } = action;

  switch (type) {
    case LOAD_CATALOGS + REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOAD_CATALOGS + SUCCESS:
      return {
        ...state,
        entities: {...state.entities, ...arrToMap(data.catalogs)},
        total: data.total,
        loading: false,
      };
    case LOAD_CATALOGS + FAILURE:
      return {
        ...state,
        loading: false,
        error: error
      };
    default:
      return state;
  }
};

export default catalogReducer;