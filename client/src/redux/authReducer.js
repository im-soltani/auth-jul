
import {REGISTER_USER,LOGIN_USER,LOGOUT_USER,GET_AUTH_USER,AUTH_ERRORS} from "./actionTypes"
const initialState={
    token:localStorage.getItem('token'),
   user:null,
   msg:null,

}
const authReducer=(state=initialState,{type,payload})=>{
  switch(type){
   case REGISTER_USER:
    case LOGIN_USER:
    localStorage.setItem("token",payload.token)
    return{
        ...state,
        user:payload.user,
        msg:payload.msg,
     
    }
case GET_AUTH_USER:
    return{
        ...state,
        user:payload.user,
        msg:payload.msg
    }
    case LOGOUT_USER:
        localStorage.removeItem("token")
        return{
            ...state,
            token:null,
            user:null
        }
              
                default:
                    return state
  }
  
          
}
export default authReducer