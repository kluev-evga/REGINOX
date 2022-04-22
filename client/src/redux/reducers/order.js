import {
  REQUEST,
  SUCCESS,
  FAILURE,
  SUBMIT_ORDER,
  ORDER_OPEN_MODAL,
  ORDER_CLOSE_MODAL,
} from '../types';


const INITIAL_STATE = {
   modalIsOpen: false,
   paymentIsProceeded: false,
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
         loading: true,
         modalIsOpen: true,
         paymentIsProceeded: true,
         error: null,
       };
     case SUBMIT_ORDER + SUCCESS:
       return {
         ...state,
         paymentIssuccessful: true,
         paymentIsProceeded: true,
         loading: false,
       };
     case SUBMIT_ORDER + FAILURE:
       return {
         ...state,
         paymentIssuccessful: false,
         loading: false,
         error: error
       };
     case ORDER_OPEN_MODAL:
       return {
         ...state,
         modalIsOpen: true,
       };
     case ORDER_CLOSE_MODAL:
       return {
         ...state,
         modalIsOpen: false,
         paymentIssuccessful: false,
         paymentIsProceeded: false
       };
     default:
       return state;
   }
}

export default orderReducer