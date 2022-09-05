import {CART_TOTAL } from "./ActionType"

const initialState={
    total:null
}

export const reducer=(state=initialState,{type,payload})=>{
  switch(type){   
        case CART_TOTAL:
          return{
              ...state,
              total:payload
          }
         
       default :
       return state

    }
  }