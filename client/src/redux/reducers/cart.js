import { REQUEST, SUCCESS, FAILURE, LOAD_CART, CART_ADD_ITEM, CART_REMOVE_ITEM, CART_CLEAR } from '../types';


const INITIAL_STATE = {
    items: {},
    entities: {},
    loaded: false,
    loading: false,
}

const cartReducer = function (state = INITIAL_STATE, action) {
    const { type, id, count, data, error } = action;

    switch (type) {
        case LOAD_CART + REQUEST:
          return {
            ...state,
            loaded: false,
            loading: true,
            error: null
          };
      case LOAD_CART + SUCCESS:
          return {
            ...state,
            entities: {...state.entities, ...data},
            loaded: true,
            loading: false,
          };
      case LOAD_CART + FAILURE:
          return {
            ...state,
            loading: false,
            error: error
          };
      case CART_ADD_ITEM:
          return {
              ...state,
              items: {...state.items, [id]: count},
          };
      case CART_REMOVE_ITEM:
          const items = {...state.items};
          delete items[id];
          return {
              ...state,
              items: items,
          };
      case CART_CLEAR:
          return {
              ...state,
              items: {},
              entities: {},
          };
      default:
          return state;
    }
}

export default cartReducer