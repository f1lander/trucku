// State de la app
// getState()
// dispatch(action)
// subscribe(listener)
import rootSaga from './sagas';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/expenses';
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(rootSaga)

export default store;
