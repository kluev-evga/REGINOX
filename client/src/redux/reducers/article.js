import {
  REQUEST,
  SUCCESS, 
  FAILURE, 
  LOAD_ARTICLE,
} from '../types';


const INITIAL_STATE = {
  entities: {},
  loading: {},
  loaded: {},
  error: null,
};

const articleReducer = function (state = INITIAL_STATE, action) {
  const { type, data, error, article } = action;

  switch (type) {
    case LOAD_ARTICLE + REQUEST:
      return {
        ...state,
        loading: {...state.loading, [article]: true},
        loaded: {...state.loaded, [article]: false},
        error: null,
      }
    case LOAD_ARTICLE + SUCCESS:
      return {
        ...state,
        entities: {...state.entities, [article]: data},
        loading: {...state.loading, [article]: false},
        loaded: {...state.loaded, [article]: true},
      };
    case LOAD_ARTICLE + FAILURE:
      return {
        ...state,
        loading: {...state.loading, [article]: false},
        loaded: {...state.loaded, [article]: true},
        error: {[article]: error},
      };
    default:
      return state;
  }
};

export default articleReducer;