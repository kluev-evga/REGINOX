import {
    REQUEST,
    SUCCESS,
    FAILURE,
    LOAD_SIMILAR_RPODUCTS,
} from '../types';


const INITIAL_STATE = {
    entities: [],
    loading: false,
}

const similarProductsReducer = function (state = INITIAL_STATE, action) {
    const { type, data, error } = action;

    switch (type) {
        case LOAD_SIMILAR_RPODUCTS + REQUEST:
            return {
              ...state,
              loading: true,
              error: null
            };
        case LOAD_SIMILAR_RPODUCTS + SUCCESS:
            return {
              ...state,
              entities: data,
              loading: false,
            };
        case LOAD_SIMILAR_RPODUCTS + FAILURE:
            return {
              ...state,
              loading: false,
              error: error
            };
      default:
            return state;
    }
}

export default similarProductsReducer