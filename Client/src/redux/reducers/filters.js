import {
    LOAD_PRODUCTS,
    SUCCESS,
    PRODUCTS_IS_FILTERING,
    PRODUCTS_IS_FILTERED,
    SETLECT_PRODUCTS_SORT_BY,
} from '../types';


const INITIAL_STATE = {
    filters: {},
    isFiltering: false,
    isFiltered: false,
    products: {},
    sortBy: { value: 'rating', label: 'Сначала популярные' },
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
          isFiltering: true,
          isFiltered: false,
      };
    case PRODUCTS_IS_FILTERED:
        return {
            ...state,
            isFiltering: false,
            isFiltered: true,
            products: data
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