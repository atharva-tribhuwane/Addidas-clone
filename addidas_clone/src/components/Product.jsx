import React from 'react'
import "./css/Product.css"
export const Product = ({prop}) => {
  console.log("dt:",prop);
  return (
    <div className='at-producttt'>
        <div><img src={prop.pro_img[0]} alt="" className='at-productimg'/></div>
        <div  className="at-product-names">{prop.pro_name}</div>
        <div  className="at-product-names">{prop.categeory} • {prop.sub_cat}</div>
        <span>{`₹ ${prop.price}`}</span>
    </div>
  )
}
