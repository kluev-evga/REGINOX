import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from './root-reducer';


const persistConfig = {
  key: 'root',
  storage,
  whitelist: [ 'cart', 'compare'],
}

const preloadedState = {
  burgerMenu: {
    main: { isOpen: false },
    filters: { isOpen: false }
  }
}

const reducer = persistReducer(persistConfig, rootReducer)

const middleware = applyMiddleware(
  thunk,
)

const store = createStore(reducer, preloadedState, composeWithDevTools(middleware))

export const persistor = persistStore(store)
export default store


































// import { applyMiddleware, createStore } from 'redux';
// import thunk from 'redux-thunk';
// import { composeWithDevTools } from '@redux-devtools/extension';
// // import rootReducer from './root-reducer';

// import { createReduxHistoryContext } from "redux-first-history";
// import { createBrowserHistory } from 'history';


// ////////////////////////////////////////////
// import { combineReducers } from 'redux';
// import { reducer as burgerMenu } from 'redux-burger-menu'

// import appReducer from './reducers/app';
// import homeReducer from './reducers/home';
// import menuReducer from './reducers/menu';
// import catalogsReducer from './reducers/catalogs';
// import sertificatesReducer from './reducers/sertificates';
// import brandsReducer from './reducers/brands';
// import articlesReducer from './reducers/articles';
// import articleReducer from './reducers/article';
// import productsReducer from './reducers/products';
// import filtersReducer from './reducers/filters';
// import productItemsReducer from './reducers/product-items';
// import cartReducer from './reducers/cart';
// import reviewsReducer from './reducers/reviews';
// import similarProductsReducer from './reducers/similar-products';
// import promoReducer from './reducers/promo';
// import newItemsReducer from './reducers/new-items';
// import compareReducer from './reducers/compare';



// const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({ 
//   history: createBrowserHistory(),
// });






// const rootReducer = combineReducers({
//   router: routerReducer,
//   burgerMenu: burgerMenu,
//   app: appReducer,
//   home: homeReducer,
//   menu: menuReducer,
//   catalogs: catalogsReducer,
//   sertificates: sertificatesReducer,
//   brands: brandsReducer,
//   articles: articlesReducer,
//   article: articleReducer,
//   products: productsReducer,
//   filters: filtersReducer,
//   productItems: productItemsReducer,
//   cart: cartReducer,
//   reviews: reviewsReducer,
//   similarProducts: similarProductsReducer,
//   promo: promoReducer,
//   newItems: newItemsReducer,
//   compare: compareReducer
// })



// const preloadedState = {
//   burgerMenu: {
//     main: { isOpen: false },
//     filters: { isOpen: false }
//   }
// }


// const middleware = applyMiddleware(
//   thunk,
//   routerMiddleware
// )

// const store = createStore(rootReducer, composeWithDevTools(middleware))


// export const history = createReduxHistory(store);
// export default store