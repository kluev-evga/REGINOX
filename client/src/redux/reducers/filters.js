import { LOAD_PRODUCTS, SUCCESS, FILTERS_IS_FILTERING, FILTERS_IS_FILTERED, FILTERS_SORT_PRODUCTS_INIT } from '../types';


const INITIAL_STATE = {
    filters: {},
    isFiltering: {},
    products: [],
    sortBy: { value: 'rating', label: 'Сначала популярные' },
    queryString: null,
    minmax: {}
}

const filtersReducer = function (state = INITIAL_STATE, action) {
  const { type, data, url, sortBy, sortedProducts, queryString, newMinMax } = action;

  switch (type) {
    case LOAD_PRODUCTS + SUCCESS:
      return {
        ...state,
        filters: {...state.filters, [url]:data.filters},
      };
    case FILTERS_IS_FILTERING:
      return {
        ...state,
        isFiltering: {...state.isFiltering, [url]: true},
        minmax: newMinMax ? {...state.minmax, [url]: newMinMax} : state.minmax
      };
      case FILTERS_IS_FILTERED:
        return {
            ...state,
            isFiltering: {...state.isFiltering, [url]: false},
            products: {...state.products, [url]: sortedProducts},
            queryString: {...state.queryString, [url]: queryString}
        };
    case FILTERS_SORT_PRODUCTS_INIT:
        return {
            ...state,
            sortBy: sortBy,
        };
    default:
      return state;
  }
}

export default filtersReducer