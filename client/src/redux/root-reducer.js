import { combineReducers } from 'redux';

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


export default combineReducers({
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
  cart: cartReducer,
  reviews: reviewsReducer,
  similarProducts: similarProductsReducer,
});