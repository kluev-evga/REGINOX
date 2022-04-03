import {ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART} from '../types';


const INITIAL_STATE = {
  entities: {},
}

const cartReducer = function (state = INITIAL_STATE, action) {
  const { type, id, count } = action;

  switch (type) {
    case ADD_ITEM_TO_CART:
        return {
            ...state,
            entities: {...state.entities, [id]: count},
        };
    case REMOVE_ITEM_FROM_CART:
        const entities = {...state.entities};
        delete entities[id];
        return {
            ...state,
            entities: {...entities},
        };
    default:
      return state;
  }
};

export default cartReducer;