import {
    REQUEST,
    SUCCESS, 
    FAILURE, 
    LOAD_COMPARE_ITEMS,
    COMPARE_TOGGLE_ITEM,
    COMPARE_REMOVE_ITEM,
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
        case COMPARE_TOGGLE_ITEM:
            const item = state.entities?.[id];
            const items = {...state.entities, [id]: true};
            if (item) delete items[id];
            return {
                ...state,
                entities: items,
            };
        case COMPARE_REMOVE_ITEM:
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