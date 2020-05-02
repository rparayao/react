// src/js/store/index.js

import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
// import { forbiddenWordsMiddleware } from "../middleware";
import 'regenerator-runtime/runtime'
import createSagaMiddleware from 'redux-saga'
import handleNewMessage from '../sagas'


const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(handleNewMessage)


export default store;