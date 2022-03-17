import {
  REQUEST,
  SUCCESS, 
  FAILURE, 
  LOAD_PRODUCTS,
} from '../types';

const INITIAL_STATE = {
  filters: {},
  products: {},
  loading: {},
  loaded: {},
  error: {},
}

const productsReducer = function (state = INITIAL_STATE, action) {
  const { type, data, error, url } = action;

  switch (type) {
    case LOAD_PRODUCTS + REQUEST:
      return {
        ...state,
        loading: {...state.loading, [url]: true},
        loaded: {...state.loaded, [url]: false},
        error: {...state.error, [url]:null},
      }
    case LOAD_PRODUCTS + SUCCESS:
      return {
        ...state,
        products: {...state.products, [url]:data.products},
        filters: {...state.products, [url]:data.filters},
        loading: {...state.loading, [url]: false},
        loaded: {...state.loaded, [url]: true},
      };
    case LOAD_PRODUCTS + FAILURE:
      return {
        ...state,
        loading: {...state.loading, [url]: false},
        error: {...state.error, [url]: error}
      };
    default:
      return state;
  }
};

export default productsReducer;