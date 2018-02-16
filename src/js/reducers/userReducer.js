const user=(state={
    username:"saifraza",age:20
    },action)=>{
        switch(action.type){
            case "SET_USER_DETAILS_FULFILLED":
            state={
                ...state,
                username:action.payload.username,
                age     :action.payload.age
            }
            break;
            case "SET_AGE":
            state={
                ...state,
                age:action.payload
            }
            break;
            default:
            return state;
        }
        return state;
}
export default user;