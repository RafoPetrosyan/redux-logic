import { createLogicMiddleware } from "redux-logic";
import { applyMiddleware, legacy_createStore as createStore, compose } from "redux";
import { logics } from "./apis";
import { rootReducer } from "./reducers";
import ApiClient from "../clientServer/ApiClient";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const dips = { ApiClient };
const logicMiddleware = createLogicMiddleware(logics, dips);
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logicMiddleware)));