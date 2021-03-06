import {REQUEST, SUCCESS, FAILURE, LOAD_HOME} from '../types';


const INITIAL_STATE = {
  loading: false,
  loaded: false,
  error: null,
};

const homeReducer = function (state = INITIAL_STATE, action) {
  const { type, data, error } = action;

  switch (type) {
    case LOAD_HOME + REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOAD_HOME + SUCCESS:
      return {
        ...state,
        slider: data.slider,
        addressBar: data.addressBar,
        popularProducts: data.popularProducts,
        loading: false,
        loaded: true,
      };
    case LOAD_HOME + FAILURE:
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

export default homeReducer;