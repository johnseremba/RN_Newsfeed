import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { rootReducer } from "../reducers/rootReducer";

const loggerMiddleware = createLogger();
const preloadedState = {};

export const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
));
