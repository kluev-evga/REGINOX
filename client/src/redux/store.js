import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import reducer from './root-reducer';


const enhancer = applyMiddleware(
    thunk,
);

export default createStore(reducer, composeWithDevTools(enhancer));