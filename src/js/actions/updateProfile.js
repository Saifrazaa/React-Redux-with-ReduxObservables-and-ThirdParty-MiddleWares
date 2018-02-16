export const update=(username,age)=>{
 return {
     type:"SET_USER_DETAILS",
     payload:{username:username,age:age}
 }
}