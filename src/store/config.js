import { combineReducers, createStore } from "redux";
import { datVeReducers } from "./reducers/datVeReducers";

const rootReducer = combineReducers({
    datVeReducers: datVeReducers,
});


export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);