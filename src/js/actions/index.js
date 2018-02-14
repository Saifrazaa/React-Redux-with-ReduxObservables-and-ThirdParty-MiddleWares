export const addtodo=()=>{
   var value=document.getElementById('add').value;
   var object={
       "todo":value
   }
   console.log(object);
   
    
   return {
       type:"Add_TODO",
       payload:object
   }
}