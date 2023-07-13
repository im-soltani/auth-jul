import { GET_AUTH_USER, LOGIN_USER, LOGOUT_USER, REGISTER_USER } from "./actionTypes"
import  axios from "axios"
export const registerUser=(newUser)=>async(dispatch)=>{
    try{
        const res=await axios.post("/userAuth/register",newUser)
        dispatch({
            type:REGISTER_USER,
            payload:res.data
        })
  
    }
    catch(error){
console.log(error)
    }
}
export const loginUser=(formData)=>async(dispatch)=>{
    try{
        const res=await axios.post("/userAuth/login",formData)
        dispatch({
            type:LOGIN_USER,
            payload:res.data
        })
  
    }
    catch(error){
console.log(error)
    }
}


export const getAuthUser=()=>async(dispatch)=>{
const  config={
    headers:{
        'authorization':localStorage.getItem("token")
    }
}
    try{
        const res=await axios.get("/userAuth/user",config)
        dispatch({
            type:GET_AUTH_USER,
            payload:res.data
        })
  
    }
    catch(error){
console.log(error)
    }
}

export const logout=()=>(dispatch)=>{
dispatch({
    type:LOGOUT_USER
})
}