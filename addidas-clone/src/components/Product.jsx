import React from 'react'
import "./css/Product.css"
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
export const Product = ({prop}) => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const navigate = useNavigate();
  // console.log("dt:",prop);
  const handleClick = ()=>{
    console.log("clicked")
    let id = prop._id;
    navigate(`/prod/:${id}`);
  }

  const addToWishlist = ()=>{
    // console.log("")
  }
  return (
    <div className='at-producttt' >
        <div>
          <img src={prop.pro_img[0]} alt="" className='at-productimg' onClick={handleClick}/>
          <span onClick={handleClick}>{`₹ ${prop.price}`}</span>
          <div className="checkb">
            <Checkbox {...label} icon={<FavoriteBorder style={{color:"black"}}/>} checkedIcon={<Favorite style={{color:"red"}} />} onClick={()=>addToWishlist}/>
          </div>
        </div>
        <div  className="at-product-names" onClick={handleClick}>{prop.pro_name}</div>
        <div  className="at-product-names" onClick={handleClick}>{prop.categeory} • {prop.sub_cat}</div>
        
    </div>
  )
}
