const math=(state={
    result:1000
},action)=>{
    switch(action.type){
        case "ADD":
        state={
            ...state,
            result:state.result+action.payload
        }
        break;
        case "SUBTRACT":
        state={
            ...state,
            result:state.result-action.payload
        }
        break;
        default:
        return state;
    }
    return state;
}
export default math;