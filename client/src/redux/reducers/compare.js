import {
    REQUEST,
    SUCCESS, 
    FAILURE, 
    LOAD_COMPARE_ITEMS,
    TOGGLE_COMPARE_ITEM,
    REMOVE_ITEM_FROM_COMPARE
} from '../types';


const INITIAL_STATE = {
    entities: {},
    loading: false,
    loaded: false,
    error: null
}

const compareReducer = function (state = INITIAL_STATE, action) {
    const { type, id, error } = action;

    switch (type) {
        case TOGGLE_COMPARE_ITEM:
            const item = state.entities?.[id];
            const items = {...state.entities, [id]: true};
            if (item) delete items[id];
            return {
                ...state,
                entities: items,
            };
        case REMOVE_ITEM_FROM_COMPARE:
            const entities = {...state.entities};
            delete entities[id];
            return {
                ...state,
                entities: entities,
            };
        case LOAD_COMPARE_ITEMS + REQUEST:
            return {
                ...state,
                loading: true,
                loaded: false,
                error: null,
            }
        case LOAD_COMPARE_ITEMS + SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
            };
        case LOAD_COMPARE_ITEMS + FAILURE:
            return {
                ...state,
                loading: false,
                error: error
            };
      default:
          return state;
    }
};

export default compareReducer;