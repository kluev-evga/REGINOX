import {REQUEST, SUCCESS, FAILURE, LOAD_SERTIFICATES, SET_SERTIFICATES_SLIDER_SLIDE, SET_SERTIFICATES_SCROLL} from '../types';
import { arrToMap } from '../utils';


const INITIAL_STATE = {
  entities: [],
  loading: false,
  loaded: false,
  error: null,
  sliderSlide: 0,
  scroll: 0,
};

const sertificatesReducer = function (state = INITIAL_STATE, action) {
  const { type, data, error } = action;

  switch (type) {
    case LOAD_SERTIFICATES + REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOAD_SERTIFICATES + SUCCESS:
      return {
        ...state,
        entities: arrToMap(data),
        loading: false,
        loaded: true,
      };
    case LOAD_SERTIFICATES + FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: error
      };
      case SET_SERTIFICATES_SLIDER_SLIDE:
        return {
            ...state,
            sliderSlide: data
        };
      case SET_SERTIFICATES_SCROLL:
        return {
            ...state,
            scroll: data
        };
    default:
      return state;
  }
};

export default sertificatesReducer;