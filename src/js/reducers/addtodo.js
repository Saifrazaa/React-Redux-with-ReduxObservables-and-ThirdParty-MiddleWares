import React from "react";
import {combineReducers} from "redux";
var newstate=[];
var addtodos= function(state=newstate,action){
    switch(action.type){
        case "ADD_TODO":
        newstate.push(action.payload);
        console.log(newstate);
        
        break;
        default:
        return state;
        
    }
    return state;
    
}
console.log(newstate);
var allreducers=combineReducers({
   addtodo:addtodos
})
export default allreducers;