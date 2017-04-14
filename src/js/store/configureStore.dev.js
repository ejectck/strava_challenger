import {createStore, applyMiddleware, compose} from "redux";
import { routerMiddleware } from 'react-router-redux';
import { browserHistory  } from 'react-router';
import rootReducer from "../reducers";
import createLogger from "redux-logger";
import thunk from '../utils/thunk';
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(
            applyMiddleware(
                thunk,
                createLogger(),
                reduxImmutableStateInvariant(),
                routerMiddleware(browserHistory)
            )
        )
    );

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers');
            store.replaceReducer(nextRootReducer);
        });
    }
    return store;
}
