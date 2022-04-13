import {
    LOAD_PRODUCTS,
    SUCCESS,
    FILTERS_TOGGLE_IS_FILTERING,
    FILTERS_IS_FILTERING,
    FILTERS_IS_FILTERED,
    FILTERS_SETLECT_SORT_BY,
    FILTERS_SET_QUERY_STRING,
} from '../types';


const INITIAL_STATE = {
    filters: {},
    isFiltering: {},
    products: [],
    sortBy: { value: 'rating', label: 'Сначала популярные' },
    queryString: null,
}

const filtersReducer = function (state = INITIAL_STATE, action) {
  const { type, data, url, sortBy, queryString, status } = action;

  switch (type) {
    case LOAD_PRODUCTS + SUCCESS:
      return {
        ...state,
        filters: {...state.filters, [url]:data.filters},
      };
    case FILTERS_TOGGLE_IS_FILTERING:
      return {
          ...state,
          isFiltering: {...state.isFiltering, [url]: status},
      };
    case FILTERS_IS_FILTERING:
      // console.log('filtering')
      return {
        ...state,
        isFiltering: {...state.isFiltering, [url]: true},
      };
      case FILTERS_IS_FILTERED:
      // console.log('filtering done')
        return {
            ...state,
            isFiltering: {...state.isFiltering, [url]: false},
            products: {...state.products, [url]: data}
        };
    case FILTERS_SETLECT_SORT_BY:
        return {
            ...state,
            sortBy: sortBy,
        };
    case FILTERS_SET_QUERY_STRING:
        return {
            ...state,
            queryString: {...state.queryString, [url]: queryString},
        };
    default:
      return state;
  }
};

export default filtersReducer;