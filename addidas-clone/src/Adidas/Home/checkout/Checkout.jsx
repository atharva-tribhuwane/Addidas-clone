import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import axios from "axios";
import { ImCross } from "react-icons/im";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Checkout = () => {
  const [cartItems, setSlider] = React.useState([]);

  const getData = () => {
    axios
      .get(
        "https://backend-gamma-vert.vercel.app/proid/6310f2d8e83a86e974c08e70 ",
        {}
      )
      .then((res) => setSlider(res.data))
      .catch((e) => {
        console.log(e);
      });
  };

  React.useEffect(() => {
    getData();
  }, []);
  const [qty, setQty] = React.useState(1);

  const handleChange = (event) => {
    setQty(event.target.value);
    console.log(qty);
  };
  const handleDelete = (itemId) => {
    axios.delete(`https://backend-gamma-vert.vercel.app/deletecart/${itemId}`);
  };
  const handleAddWish=(id)=>{
    axios
    .post(`https://backend-gamma-vert.vercel.app/wish/${id}`, {})
    .then((res) => alert("Added to your wishlist"))
   }
   let totalprice=0;
   let noofcarts=0;
  cartItems.map((item)=>{
 noofcarts+=1
     totalprice+=item.price;
  }
  )
    
  
   
 


  return (
    <>
    <div className="checkout">
      <div className="checkoutLeft">
        <div className="checkoutleft-divfirst">
          <p className="checkoutTitle">YOUR BAG</p>
          <div style={{ display: "flex",fontSize:"22px",letterSpacing:"1px",marginTop:"-28px" }}>
            <p >TOTAL   ({noofcarts}   ITEMS)</p>
            <p style={{ fontWeight: 700,marginLeft:"10px" }}> ₹{totalprice}</p>
          </div>
          <p style={{ textAlign: "left",fontSize:"20px",letterSpacing:"1px",marginTop:"-10px",marginBottom:"-20px" }}>
            Items in your bag are not reserved — check out now to make them
            yours.
          </p>
          <div
            className="main-wrapper-product-cart"
            style={{ marginTop: "64px" }}
          >
            {cartItems.map((item) => (
              <div className="checkoutProduct-card">
                <img
                  className="checkoutProductImg"
                  src={item.pro_img[0]}
                  alt="Item Img"
                />
                <div className="checkoutProductInfo">
                  <div className="checkoutProductInfo-child-div">
                    <p className="checkoutProductTitle">{item.pro_name}</p>
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
                        {qty * item.price}
                      </p>
                      <ImCross
                        className="delete-icon-cart"
                        onClick={() => {
                          handleDelete(item._id);
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
                </div><FaRegHeart onClick={()=>handleAddWish(item._id)} style={{position:"relative",right:'30px',top:"80px",fontSize:"25px",cursor:"pointer"}}/>
              </div>
            ))}
          </div>
        </div>
        <Link to="./delivery" style={{ border: "none", textDecoration: "none" }}>
        <div className="div-brutal-video-checkout" style={{width:"45%"}}>
          <button className="button-brutal-video-checkout">
            <div className="div-underbutton-checkout">
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  letterSpacing: "1.5px",
                  marginTop: "10px",
                }}
              >
                CHECKOUT
              </p>
              <HiOutlineArrowNarrowRight
                style={{ fontSize: "30px", marginTop: "10px" }}
              />
            </div>
          </button>
        </div>
      </Link>
      </div>
      <div className="checkoutRight">
        <Subtotal total={totalprice}
        qty={noofcarts}/>
      </div>
      
    </div>
    </>
  );
};

export default Checkout;
