import {REQUEST, SUCCESS, FAILURE, SUBMIT_ORDER, ORDER_CLOSE_MODAL} from '../types';


const INITIAL_STATE = {
   modalIsOpen: false,
   paymentIssuccessful: false,
   loading: false,
   error: null,
}

const orderReducer = function (state = INITIAL_STATE, action) {
   const { type, error } = action;

   switch (type) {
     case SUBMIT_ORDER + REQUEST:
       return {
         ...state,
         modalIsOpen: true,
         loading: true,
         error: null,
       };
     case SUBMIT_ORDER + SUCCESS:
       return {
         ...state,
         paymentIssuccessful: true,
         loading: false,
       };
     case SUBMIT_ORDER + FAILURE:
       return {
         ...state,
         paymentIssuccessful: false,
         loading: false,
         error: error
       };
     case ORDER_CLOSE_MODAL:
       return {
         ...state,
         modalIsOpen: false,
         paymentIssuccessful: false,
       };
     default:
       return state;
   }
}

export default orderReducer