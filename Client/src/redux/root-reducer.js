import { combineReducers } from 'redux';
import catalogReducer from './reducers/catalog';
import homeReducer from './reducers/home';
import menuReducer from './reducers/menu';
import catalogsReducer from './reducers/catalogs';


export default combineReducers({
  catalog: catalogReducer,
  home: homeReducer,
  menu: menuReducer,
  catalogs: catalogsReducer
});