
export const addtodo=()=>{
    var value=document.getElementById('add').value;
    var object={
        "todo":value
    }
    
    return {
        type:"ADD_TODO",
        payload:object
    }
 }