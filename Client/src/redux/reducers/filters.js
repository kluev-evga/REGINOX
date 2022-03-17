import { PRODUCTS_IS_FILTERED } from '../types';


const INITIAL_STATE = {
    isFiltered: {},
    products: {}
}

const filtersReducer = function (state = INITIAL_STATE, action) {
  const { type, data, url } = action;

  switch (type) {
    case PRODUCTS_IS_FILTERED:
        return {
            ...state,
            isFiltered: {...state.isFiltered, [url]: true},
            products: {...state.products, [url]: data}
        };
    default:
      return state;
  }
};

export default filtersReducer;