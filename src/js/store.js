import {createStore,applyMiddleware,combineReducers} from "redux";
import logger from "redux-logger";
import user from "./reducers/userReducer";
import math from "./reducers/mathReducer";
export default createStore(
    combineReducers({
        user,math
    }),
    applyMiddleware(logger)
)