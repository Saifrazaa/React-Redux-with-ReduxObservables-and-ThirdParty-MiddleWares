import React from "react";
import {combineReducers} from "redux";
import showtodos from "./alltodos";
import AddTodo from "./addtodo";
var allreducers=combineReducers({
    showtodo:showtodos,
    addtodo  :AddTodo
})
export default allreducers;