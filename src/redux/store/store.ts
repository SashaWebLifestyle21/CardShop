import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import { rootSaga } from "../sagas";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const configureStore = (preloadedState: any) => (
    createStore(
        rootReducer,
        preloadedState,
        composeEnhancers(applyMiddleware(sagaMiddleware)),
    )
);

const store = configureStore({})

sagaMiddleware.run(rootSaga);

export type Store = typeof store;
export type AppDispatch = Store['dispatch']

export default store;
