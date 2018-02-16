export const update=(username,age)=>{
    return {
        type:"SET_USER_DETAILS",
        payload:new Promise((resolve,rejected)=>{
            setTimeout(()=>{
                resolve({username:username,age:age})
            },1000)
        })
    }
}