import {
  REQUEST,
  SUCCESS, 
  FAILURE, 
  LOAD_FILTERS,
  LOAD_PRODUCTS,
  SELECT_PRODUCTS_ID,
  FILTER_BY_CATEGORY
} from '../types';

const INITIAL_STATE = {
  productsId: null,
  filters: {},
  filtersLoading: {},
  filtersLoaded: {},
  filtersError: {},
  products: {},
  productsLoading: {},
  productsLoaded: {},
  productsError: {},
  filtered: false,
};

const productsReducer = function (state = INITIAL_STATE, action) {
  const { type, data, error, id } = action;

  switch (type) {
    case SELECT_PRODUCTS_ID:
      return {
        ...state,
        productsId: id
      }
    case LOAD_FILTERS + REQUEST:
      return {
        ...state,
        filtersLoading: {...state.filtersLoading, [id]: true},
        filtersLoaded: {...state.filtersLoaded, [id]: false},
        filtersError: {...state.filtersError, [id]:null},
      }
    case LOAD_FILTERS + SUCCESS:
      return {
        ...state,
        filters: {...state.filters, [id]:data},
        filtersLoading: {...state.filtersLoading, [id]: false},
        filtersLoaded: {...state.filtersLoaded, [id]: true},
      };
    case LOAD_FILTERS + FAILURE:
      return {
        ...state,
        filtersLoading: {...state.filtersLoading, [id]: false},
        filtersError: {...state.filtersError, [id]: error}
      };
    case LOAD_PRODUCTS + REQUEST:
      return {
        ...state,
        productsLoading: {...state.productsLoading, [id]: true},
        productsLoaded: {...state.productsLoaded, [id]: false},
        productsError: {...state.productsError, [id]:null},
      }
    case LOAD_PRODUCTS + SUCCESS:
      return {
        ...state,
        products: {...state.products, [id]:data},
        productsLoading: {...state.productsLoading, [id]: false},
        productsLoaded: {...state.productsLoaded, [id]: true},
      };
    case LOAD_PRODUCTS + FAILURE:
      return {
        ...state,
        productsLoading: {...state.productsLoading, [id]: false},
        productsError: {...state.productsError, [id]: error}
      };
    case FILTER_BY_CATEGORY:
      return {
        ...state,
        filtered: true,
      };
    default:
      return state;
  }
};

export default productsReducer;