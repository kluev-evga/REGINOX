import {REQUEST, SUCCESS, FAILURE, LOAD_BRANDS} from '../types'


const INITIAL_STATE = {
  entities: [],
  loading: false,
  loaded: false,
  error: null,
}

const brandsReducer = function (state = INITIAL_STATE, action) {
  const { type, data, error } = action;

  switch (type) {
    case LOAD_BRANDS + REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOAD_BRANDS + SUCCESS:
      return {
        ...state,
        entities: data,
        loading: false,
        loaded: true,
      };
    case LOAD_BRANDS + FAILURE:
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

export default brandsReducer