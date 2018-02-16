import {createStore,applyMiddleware,combineReducers} from "redux";
import logger from "redux-logger";
import user from "./reducers/userReducer";
import math from "./reducers/mathReducer";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
export default createStore(
    combineReducers({
        user,math
    }),
    applyMiddleware(logger,thunk,promise())
)