import { REQUEST, SUCCESS, FAILURE, FORM_SUBMIT } from '../types';


const INITIAL_STATE = {
   loading: false,
   loaded: false,
   error: null,
}

const formFeedback = function (state = INITIAL_STATE, action) {
   const { type, error } = action;

   switch (type) {
     case FORM_SUBMIT + REQUEST:
       return {
         ...state,
         loading: true,
         loaded: false,
         error: null,
       };
     case FORM_SUBMIT + SUCCESS:
       return {
         ...state,
         loading: false,
         loaded: true,
       };
     case FORM_SUBMIT + FAILURE:
       return {
         ...state,
         loading: false,
         loaded: false,
         error: error
       };
     default:
       return state;
   }
}

export default formFeedback