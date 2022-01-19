import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers';

const composedEnhancer = composeWithDevTools();

export const store = createStore(rootReducer, composedEnhancer);