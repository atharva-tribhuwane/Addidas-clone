import React, { useEffect } from "react";
// import { useStateValue } from '../../context/StateProvider'
import "./Checkout.css";
import axios from 'axios'
import { ImCross, ImPriceTag } from "react-icons/im";
import { FaRegHeart } from "react-icons/fa";
// import { useDispatch } from "react-redux";
// import { totalcartprice } from "../../Redux/Cart/Action";


const CheckoutProduct = ({image, id, name, price  }) => {
    const [qty, setQty]=React.useState(1)
    // const dispatch=useDispatch()
    
  const handleChange=(event) =>{
    setQty(event.target.value);
  //   console.log(qty)
  //  let x = qty*price;
  //   dispatch(totalcartprice(x))
  //   console.log(qty, price)
   
  }
  React.useEffect(() => {
   
  }, []);
 
  const handleDelete= (itemId)=>{
  
    axios.delete(`https://backend-gamma-vert.vercel.app/deletecart/${itemId}`)
   
}
const handleAddWish = (id) => {
  axios
    .post(`https://backend-gamma-vert.vercel.app/wish/${id}`, {})
    .then((res) => alert("Added to your wishlist"));
};

  return (
    <>
    <div className="checkoutProduct-card">
                <img
                  className="checkoutProductImg"
                  src={image}
                  alt="Item Img"
                />
                <div className="checkoutProductInfo">
                  <div className="checkoutProductInfo-child-div">
                    <p className="checkoutProductTitle">{name}</p>
                    <div
                      style={{
                        width: "100px",

                        display: "flex",
                        padding: "20px",
                        justifyContent: "space-between",
                      }}
                    >
                      <p className="checkoutProductPrice">
                        <small>₹</small>
                        {qty * price}
                      </p>
                      <ImCross
                        className="delete-icon-cart"
                        onClick={() => {
                          handleDelete(id);
                        }}
                      />
                      
                    </div>
                  </div>
                  <div className="checkoutProductTitle-size">Size:4</div>
                  <div className="checkoutProductTitle-itemno">
                    {" "}
                    <select style={{width:"70%",height:"50%",marginTop:"80px",border:"2px solid black",fontSize:"25px"}} onChange={handleChange}>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
                      <option value={9}>9</option>
                      <option value={10}>10</option>
                    </select>
                  </div>
                </div><FaRegHeart onClick={()=>handleAddWish(id)} style={{position:"relative",right:'30px',top:"80px",fontSize:"25px",cursor:"pointer"}}/>
              </div>
            
    </>
    
  );
};

export default CheckoutProduct;
