import { PRODUCTS_IS_FILTERING, PRODUCTS_IS_FILTERED } from '../types';


const INITIAL_STATE = {
    isFiltering: {},
    isFiltered: {},
    products: {}
}

const filtersReducer = function (state = INITIAL_STATE, action) {
  const { type, data, url } = action;

  switch (type) {
    case PRODUCTS_IS_FILTERING:
      return {
          ...state,
          isFiltering: {...state.isFiltering, [url]: true},
          isFiltered: {...state.isFiltered, [url]: false},
          products: {...state.products, [url]: data}
      };
    case PRODUCTS_IS_FILTERED:
        return {
            ...state,
            isFiltering: {...state.isFiltering, [url]: false},
            isFiltered: {...state.isFiltered, [url]: true},
            products: {...state.products, [url]: data}
        };
    default:
      return state;
  }
};

export default filtersReducer;