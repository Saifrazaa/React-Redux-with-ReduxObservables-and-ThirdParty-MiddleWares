import React from "react";
import {combineReducers} from "redux";
const initialState=()=>{
   return [
    {   
        id:1,
        todo:"Welcome to the pool"
    },
    {
        id:2,
        todo:"Go to university"
    },
    {
        id:3,
        todo:"participate in competition"
    }
]
}

const newtodo=(state,action)=>{
    state=state || {};
    switch(action.type){
        case  "ADD_TODO":
        Object.assign({},state,action.payload)
        default:
        return state;
        
    }
    return state;
}


var allreducer=combineReducers({
    showtodos:initialState,
    newaddedtodo :newtodo
})
export default allreducer;
