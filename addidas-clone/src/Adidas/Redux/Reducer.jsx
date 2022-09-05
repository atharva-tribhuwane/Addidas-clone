
import {ADD_CART} from "./Actiontype"

const initialState={
    token:[]
}

export const reducer=(state=initialState,{type,payload})=>{
  switch(type){

    case ADD_CART:
        return{
            ...state,
          token:[...state.token,payload]
            
        }
       
        
       default :
       return state

    }
}
