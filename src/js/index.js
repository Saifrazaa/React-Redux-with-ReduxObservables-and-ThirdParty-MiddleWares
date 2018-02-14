import React ,{Component} from "react";
import ReactDom from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import Main from "./components/main";
import allreducer from "./reducers";
var store=createStore(allreducer);
ReactDom.render(
    <Provider store={store}>
        <Main />
    </Provider>
    ,document.getElementById('root'));
