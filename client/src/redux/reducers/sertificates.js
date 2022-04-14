import { REQUEST, SUCCESS, FAILURE, LOAD_SERTIFICATES } from '../types';
import { arrToMap } from '../utils';


const INITIAL_STATE = {
  entities: [],
  loading: false,
  loaded: false,
  error: null,
};

const sertificatesReducer = function (state = INITIAL_STATE, action) {
  const { type, data, error } = action;

  switch (type) {
    case LOAD_SERTIFICATES + REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOAD_SERTIFICATES + SUCCESS:
      return {
        ...state,
        entities: arrToMap(data),
        loading: false,
        loaded: true,
      };
    case LOAD_SERTIFICATES + FAILURE:
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

export default sertificatesReducer;