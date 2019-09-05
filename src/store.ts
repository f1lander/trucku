// State de la app
// getState()
// dispatch(action)
// subscribe(listener)
import rootSaga from './sagas';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers/ExpensesReducer';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, composeEnhancers(
	applyMiddleware(sagaMiddleware, logger)
));

sagaMiddleware.run(rootSaga)

export default store;
