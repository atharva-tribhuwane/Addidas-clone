
import {CART_TOTAL} from "./ActionType"


export const totalcartprice=(payload)=>{
    return{
        type:CART_TOTAL,
        payload
    }
}
