import { createStore, applyMiddleware, compose } from 'redux';
import penderMiddleware from 'redux-pender';
import modules from './modules';

const isDevelopment = process.env.NODE_ENV === 'developement';
const composeEnhancers = isDevelopment ? compose : compose;

const configureStore = (initialState) => {
    const store = createStore(modules, initialState, composeEnhancers(
        applyMiddleware(penderMiddleware())
    ));

    if (module.hot) {
        module.hot.accept('./modules', () => {
            const nextRootReducer = require('./modules').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}

export default configureStore;