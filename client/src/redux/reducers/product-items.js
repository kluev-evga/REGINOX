import {
    REQUEST,
    SUCCESS, 
    FAILURE, 
    LOAD_PRODUCT,
    LOAD_COMPARE_ITEMS,
} from '../types';


const INITIAL_STATE = {
    entities: {},
    loading: {},
    loaded: {},
    error: {},
}

const productItemsReducer = function (state = INITIAL_STATE, action) {
    const { type, data, error, productUrl } = action;

    switch (type) {
        case LOAD_PRODUCT + REQUEST:
            return {
                ...state,
                loading: {...state.loading, [productUrl]: true},
                loaded: {...state.loaded, [productUrl]: false},
                error: {...state.error, [productUrl]:null},
            }
        case LOAD_PRODUCT + SUCCESS:
            return {
                ...state,
                entities: {...state.entities, [productUrl]: data},
                loading: {...state.loading, [productUrl]: false},
                loaded: {...state.loaded, [productUrl]: true},
            };
        case LOAD_PRODUCT + FAILURE:
            return {
                ...state,
                loading: {...state.loading, [productUrl]: false},
                error: {...state.error, [productUrl]: error}
            };
        case LOAD_COMPARE_ITEMS + SUCCESS:
            return {
                ...state,
                entities: {...state.entities,  ...data},
            };
        default:
            return state;
    }
};

export default productItemsReducer;