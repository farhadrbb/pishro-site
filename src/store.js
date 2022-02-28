import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga, { Reducers } from "./Reducers";

// import reducer from './Reducers'
// import mySaga from './sagas'
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
export const store = createStore(Reducers, applyMiddleware(sagaMiddleware));

// then run the saga
sagaMiddleware.run(rootSaga);
