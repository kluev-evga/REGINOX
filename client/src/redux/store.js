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
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const enhancer = applyMiddleware(thunk);

const store = createStore(persistedReducer, composeWithDevTools(enhancer));

export const persistor = persistStore(store);
export default store;