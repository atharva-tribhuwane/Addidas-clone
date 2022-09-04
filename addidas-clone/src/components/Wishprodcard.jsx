import React from 'react'
import "./Wishlistprod.css";


export const Wishprodcard = () => {
  return (
    <div className='at-producttt'>
        <div>
          <img src="https://assets.adidas.com/images/w_600,f_auto,q_auto/735e0991a6704cb4973ead4300a44613_9366/Designed_to_Move_Fleece_Pants_Black_GT1424_01_laydown.jpg" alt="" className='at-productimg'/>
          <span>{`₹ 2830`}</span>
          {/* <div className="checkb">
            <Checkbox {...label} icon={<FavoriteBorder style={{color:"black"}}/>} checkedIcon={<Favorite style={{color:"red"}} />} onClick={()=>alert("Added to wishlist")}/>
          </div> */}
        </div>
        <div  className="at-product-names">Supernova Shoes</div>
        <div  className="at-product-names">Mens • Training</div>
        
    </div>
  )
}
