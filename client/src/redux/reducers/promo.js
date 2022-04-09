import {REQUEST, SUCCESS, FAILURE, LOAD_PROMO_ITEMS } from '../types';


const INITIAL_STATE = {
  entities: [],
  loading: false,
  loaded: false,
  error: null,
};

const promoReducer = function (state = INITIAL_STATE, action) {
  const { type, data, error } = action;

  switch (type) {
    case LOAD_PROMO_ITEMS + REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOAD_PROMO_ITEMS + SUCCESS:
      return {
        ...state,
        entities: data,
        loading: false,
        loaded: true,
      };
    case LOAD_PROMO_ITEMS + FAILURE:
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

export default promoReducer;