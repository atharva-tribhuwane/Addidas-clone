import {LOGIN_LOADING, LOGIN_ERROR, CART_TOTAL, LOGOUT_SUCCESS } from "./ActionType"

const initialState={
    loading:null,
    erroe:null,
    total:0
}

export const reducer=(state=initialState,{type,payload})=>{
  switch(type){

    case LOGIN_LOADING:
        return{
            ...state,
            loading:1
        }
        case CART_TOTAL:
          return{
              ...state,
              loading:1,
              error:1,
              total:state+payload
          }
          case LOGIN_ERROR:
            return{
                ...state,
                loading:1,
                error:1
            }
            case LOGOUT_SUCCESS:
              return initialState;
        
       default :
       return state

    }
  }