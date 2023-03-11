// ---------- Imports ---------- //
import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleWare from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './saga';
const sagaMiddleWare = createSagaMiddleWare();

// ---------- config Store ---------- //
const configStore = (initiateState = {}) => {
  const store = createStore(
    rootReducer,
    initiateState,
    applyMiddleware(sagaMiddleWare),
  );
  sagaMiddleWare.run(rootSaga);
  return store;
};
export const store = configStore();

global.store = store;
