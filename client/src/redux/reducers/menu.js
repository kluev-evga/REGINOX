import {
    REQUEST,
    SUCCESS,
    FAILURE,
    LOAD_MENU,
    MENU_OPEN_MAIN,
    MENU_СLOSE_MAIN,
    MENU_OPEN_FILTERS,
    MENU_CLOSE_FILTERS
} from '../types';


const INITIAL_STATE = {
    links: [],
    categories: [],
    loading: false,
    loaded: false,
    error: null,

    mainIsOpen: false,
    filtersIsOpen: false,
    // isMainMenu: true,
};

const menuReducer = function (state = INITIAL_STATE, action) {
  const { type, data, error } = action;

  switch (type) {
      case LOAD_MENU + REQUEST:
          return {
              ...state,
              loading: true,
              error: null,
          };
      case LOAD_MENU + SUCCESS:
      return {
          ...state,
          links: data.links,
          categories: data.categories,
          loading: false,
          loaded: true,
      };
      case LOAD_MENU + FAILURE:
      return {
          ...state,
          loading: false,
          loaded: false,
          error: error
      };
    case MENU_OPEN_MAIN:
        return {
            ...state,
            mainIsOpen: true,
        };
    case MENU_СLOSE_MAIN:
        return {
            ...state,
            mainIsOpen: false,
        };
    case MENU_OPEN_FILTERS:
        return {
            ...state,
            filtersIsOpen: true,
        };
    case MENU_CLOSE_FILTERS:
        return {
            ...state,
            filtersIsOpen: false,
        };
    default:
      return state;
  }
};

export default menuReducer;



// const menuReducer = function (state = INITIAL_STATE, action) {
//   const { type, data, error } = action;

//   switch (type) {
//       case LOAD_MENU + REQUEST:
//           return {
//               ...state,
//               loading: true,
//               error: null,
//           };
//       case LOAD_MENU + SUCCESS:
//       return {
//           ...state,
//           links: data.links,
//           categories: data.categories,
//           loading: false,
//           loaded: true,
//       };
//       case LOAD_MENU + FAILURE:
//       return {
//           ...state,
//           loading: false,
//           loaded: false,
//           error: error
//       };
//     case MENU_OPEN_MAIN:
//         return {
//             ...state,
//             isMainMenu: true,
//             isOpen: true,
//         };
//     case MENU_OPEN_FILTERS:
//         return {
//             ...state,
//             isMainMenu: false,
//             isOpen: true,
//         };
//     case MENU_CLOSE:
//         return {
//             ...state,
//             isOpen: false,
//         };
//     default:
//       return state;
//   }
// };