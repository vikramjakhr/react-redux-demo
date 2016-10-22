import {createStore, applyMiddleware} from "redux";
import reducers from "../reducers/index";
import thunk from "redux-thunk";
import createLogger from "redux-logger";

let middleware = [thunk];
const logger = createLogger();
middleware.push(createLogger);


const store = createStore(
    reducers,
    applyMiddleware(thunk, logger)
);

export default store;