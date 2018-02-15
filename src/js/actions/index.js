
export const addtodo=(todovalue)=>{
   console.log(todovalue);
   var object={
       todo:todovalue
   }
    return {
        type:"ADD_TODO",
        payload:object
    }
 }