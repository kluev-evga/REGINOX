import {
    REQUEST,
    SUCCESS, 
    FAILURE, 
    LOAD_REVIEWS,
} from '../types';


const INITIAL_STATE = {
    entities: {},
    loading: {},
    loaded: {},
    error: {},
}

const reviewsReducer = function (state = INITIAL_STATE, action) {
    const { type, data, error, productUrl } = action;

    switch (type) {
        case LOAD_REVIEWS + REQUEST:
        return {
            ...state,
            loading: {...state.loading, [productUrl]: true},
            loaded: {...state.loaded, [productUrl]: false},
            error: {...state.error, [productUrl]:null},
        }
        case LOAD_REVIEWS + SUCCESS:
            const reviews = state.entities[productUrl] ?[...state.entities[productUrl], ...data]: data;
        return {
            ...state,
            entities: {...state.entities, [productUrl]: reviews},
            loading: {...state.loading, [productUrl]: false},
            loaded: {...state.loaded, [productUrl]: true},
        };
        case LOAD_REVIEWS + FAILURE:
        return {
            ...state,
            loading: {...state.loading, [productUrl]: false},
            error: {...state.error, [productUrl]: error}
        };
        default:
        return state;
    }
};

export default reviewsReducer;