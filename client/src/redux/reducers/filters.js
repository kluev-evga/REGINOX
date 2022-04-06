import {
    LOAD_PRODUCTS,
    SUCCESS,
    PRODUCTS_IS_FILTERING,
    PRODUCTS_IS_FILTERED,
    SETLECT_PRODUCTS_SORT_BY,
    SET_QUERY_STRING,
} from '../types';


const INITIAL_STATE = {
    filters: {},
    isFiltering: true,
    products: [],
    sortBy: { value: 'rating', label: 'Сначала популярные' },
    queryString: null,
}

const filtersReducer = function (state = INITIAL_STATE, action) {
  const { type, data, url, sortBy, queryString } = action;

  switch (type) {
    case LOAD_PRODUCTS + SUCCESS:
      return {
        ...state,
        filters: {...state.filters, [url]:data.filters},
      };
    case PRODUCTS_IS_FILTERING:
      return {
          ...state,
          isFiltering: true,
      };
    case PRODUCTS_IS_FILTERED:
        return {
            ...state,
            isFiltering: false,
            products: data
        };
    case SETLECT_PRODUCTS_SORT_BY:
        return {
            ...state,
            sortBy: sortBy,
        };
    case SET_QUERY_STRING:
        return {
            ...state,
            queryString: {...state.queryString, [url]: queryString},
        };
    default:
      return state;
  }
};

export default filtersReducer;