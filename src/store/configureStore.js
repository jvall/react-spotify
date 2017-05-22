import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from '../epics';
import * as http from "../ajax";

const epicMiddleware = createEpicMiddleware(rootEpic, {
  dependencies: http
});

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, epicMiddleware)
    );
}