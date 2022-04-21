import { combineReducers } from 'redux';
import { reducer as burgerMenu } from 'redux-burger-menu'
import { persistReducer } from 'redux-persist';

import appReducer from './reducers/app';
import homeReducer from './reducers/home';
import menuReducer from './reducers/menu';
import catalogsReducer from './reducers/catalogs';
import sertificatesReducer from './reducers/sertificates';
import brandsReducer from './reducers/brands';
import articlesReducer from './reducers/articles';
import articleReducer from './reducers/article';
import productsReducer from './reducers/products';
import filtersReducer from './reducers/filters';
import productItemsReducer from './reducers/product-items';
import cartReducer from './reducers/cart';
import reviewsReducer from './reducers/reviews';
import similarProductsReducer from './reducers/similar-products';
import promoReducer from './reducers/promo';
import newItemsReducer from './reducers/new-items';
import compareReducer from './reducers/compare';
import orderReducer from './reducers/order';
import storage from 'redux-persist/lib/storage';


const comparePersistConfig = {
  key: 'compare',
  storage: storage,
  whitelist: ['entities']
}

const cartPersistConfig = {
  key: 'cart',
  storage: storage,
  whitelist: ['items']
}

const rootReducer = combineReducers({
  burgerMenu: burgerMenu,
  app: appReducer,
  home: homeReducer,
  menu: menuReducer,
  catalogs: catalogsReducer,
  sertificates: sertificatesReducer,
  brands: brandsReducer,
  articles: articlesReducer,
  article: articleReducer,
  products: productsReducer,
  filters: filtersReducer,
  productItems: productItemsReducer,
  cart: persistReducer(cartPersistConfig, cartReducer),
  order: orderReducer,
  reviews: reviewsReducer,
  similarProducts: similarProductsReducer,
  promo: promoReducer,
  newItems: newItemsReducer,
  compare: persistReducer(comparePersistConfig, compareReducer)
})

export default rootReducer