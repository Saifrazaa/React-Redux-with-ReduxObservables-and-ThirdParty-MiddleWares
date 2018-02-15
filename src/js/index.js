import React from "react";
import ReactDom from "react-dom";
//importing components and third party functions
import {createStore, applyMiddleware,combineReducers} from "redux";
import logger from "redux-logger";
import {Provider} from "react-redux";
import store from "./store.js";
import App from "./components/app";
ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root')
)