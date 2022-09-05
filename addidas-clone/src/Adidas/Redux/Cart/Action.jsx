
import {LOGIN_LOADING,CART_TOTAL,LOGIN_ERROR,LOGOUT_SUCCESS} from "./ActionType"

export const loginLoading=()=>{
    return{
        type:LOGIN_LOADING
    }
}
export const totalcartprice=(payload)=>{
    return{
        type:CART_TOTAL,
        payload
    }
}
export const loginError=()=>{
    return{
        type:LOGIN_ERROR
    }
}
export const logoutSuccess=()=>{
    return{
        type:LOGOUT_SUCCESS
    }
}