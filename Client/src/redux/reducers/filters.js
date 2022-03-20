import {
    LOAD_PRODUCTS,
    SUCCESS,
    PRODUCTS_IS_FILTERING,
    PRODUCTS_IS_FILTERED,
    SETLECT_PRODUCTS_SORT_BY
} from '../types';


const INITIAL_STATE = {
    filters: {},
    isFiltering: {},
    isFiltered: {},
    products: {},
    sortBy: { value: 'rating', label: 'Сначала популярные' }
}

const filtersReducer = function (state = INITIAL_STATE, action) {
  const { type, data, url, sortBy } = action;

  switch (type) {
    case LOAD_PRODUCTS + SUCCESS:
      return {
        ...state,
        filters: {...state.products, [url]:data.filters},
      };
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
    case SETLECT_PRODUCTS_SORT_BY:
        return {
            ...state,
            sortBy: sortBy,
        };
    default:
      return state;
  }
};

export default filtersReducer;