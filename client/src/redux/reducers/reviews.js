import {
    REQUEST,
    SUCCESS, 
    FAILURE, 
    LOAD_REVIEWS,
} from '../types';


const INITIAL_STATE = {
    entities: {},
    loading: {},
    current: {},
    error: {},
}

const reviewsReducer = function (state = INITIAL_STATE, action) {
    const { type, data, error, productUrl, current } = action;

    switch (type) {
        case LOAD_REVIEWS + REQUEST:
        return {
            ...state,
            loading: {...state.loading, [productUrl]: true},
            error: {...state.error, [productUrl]:null},
        }
        case LOAD_REVIEWS + SUCCESS:
            const reviews = state.entities[productUrl] ? [...state.entities[productUrl], ...data] : data;
        return {
            ...state,
            entities: {...state.entities, [productUrl]: reviews},
            loading: {...state.loading, [productUrl]: false},
            current:  {...state.current, [productUrl]: current},
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