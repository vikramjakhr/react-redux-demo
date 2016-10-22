import {combineReducers} from "redux";
import counter from "../reducers/counter";


let reducers = combineReducers({
    counter
});

export default reducers;