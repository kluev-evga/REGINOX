import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { routerMiddleware } from 'connected-react-router';
import reducer from './root-reducer';
import history from '../history';

const enhancer = applyMiddleware(
    thunk,
    routerMiddleware(history),
);

export default createStore(reducer, composeWithDevTools(enhancer));