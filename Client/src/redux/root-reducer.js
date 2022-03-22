import { combineReducers } from 'redux';

import history from '../history';
import { connectRouter } from 'connected-react-router';

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


export default combineReducers({
  router: connectRouter(history),
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
});