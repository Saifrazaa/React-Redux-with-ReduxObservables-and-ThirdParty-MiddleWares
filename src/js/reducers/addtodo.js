import React from "react";
import {combineReducers} from "redux";


var addtodos= function(state=[],action){
    switch(action.type){
        case "ADD_TODO":
        return [
            ...state,
            action.payload
        ]
        default:
            return state;   
    }
    // return state;
}

var allreducers=combineReducers({
    addtodo:addtodos
})
export default allreducers;