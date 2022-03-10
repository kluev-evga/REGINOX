import {
  REQUEST,
  SUCCESS, 
  FAILURE, 
  LOAD_ARTICLES,
  SELECT_ARTICLES_PAGE
} from '../types';

import { arrToMap } from '../utils';

const INITIAL_STATE = {
  entities: {},
  pages: {},
  loading: {},
  loaded: {},
  currentPage: 1,
  total: null,
  error: null,
};

const articlesReducer = function (state = INITIAL_STATE, action) {
  const { type, data, error, page } = action;

  switch (type) {
    case LOAD_ARTICLES + REQUEST:
      return {
        ...state,
        loading: {...state.loading, [page]: true},
        loaded: {...state.loaded, [page]: false},
        error: null,
      }
    case LOAD_ARTICLES + SUCCESS:
      return {
        ...state,
        entities: {...state.entities, ...arrToMap(data.entities)},
        pages: {...state.pages, [page]: data.entities.map(({id}) => id)},
        loading: {...state.loading, [page]: false},
        loaded: {...state.loaded, [page]: true},
        total:  data.total
      };
    case LOAD_ARTICLES + FAILURE:
      return {
        ...state,
        loading: {...state.loading, [page]: false},
        error: error
      };
    case SELECT_ARTICLES_PAGE:
      return {
        ...state,
        currentPage: page
      };
    default:
      return state;
  }
};

export default articlesReducer;