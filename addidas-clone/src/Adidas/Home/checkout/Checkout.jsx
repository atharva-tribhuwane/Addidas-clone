import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import axios from 'axios'
import { ADD } from "../../Redux/Action";


const Checkout = () => {

  const [cartItems, setSlider] = React.useState([]);
  const [data, setData]=React.useState([])
  const cartData=useSelector((state)=>state.auth.token)
  const dispatch = useDispatch();
  console.log(cartData)
  
  React.useEffect(() => {
  setSlider(cartData)
  }, []);
 
  const getData = () => {
    axios
      .get("https://backend-gamma-vert.vercel.app/pro", {})
      .then((res) => setData(res.data.slice(2)))
      .catch((e) => {
        console.log(e);
      });
  };

  React.useEffect(() => {
    getData();
  }, []);

  // let ListCart = [];
  //   let TotalCart=0;
  //   Object.keys(items.Carts).forEach(function(item){
  //       TotalCart+=items.Carts[item].quantity * items.Carts[item].price;
  //       ListCart.push(items.Carts[item]);
  //   });
  //   function TotalPrice(price,tonggia){
  //       return Number(price * tonggia).toLocaleString('en-US');
  //   }
  const handleCart=(item)=>{
    dispatch(ADD(item))
   }

  return (
    <div className="checkout">
       {data.map((item, key) => {
            return (
              <div className="card-main-wrapper">
               
                  <div className="card-img-price-div">
                    <img src={item.pro_img[0]} alt="Forum Low Shoes" />
                    <div className="card-price-div">
                      {" "}
                      <button>₹{item.price}</button>
                    </div>
                  </div>
                  <div className="card-other-details">
                    <p style={{fontSize:"20px",letterSpacing:"-0.5px",fontWeight:"350"}}>{item.pro_name}</p>
                    <p style={{color:"gray"}}>{item.categeory} Originals</p>
                    <p>NEW</p>
                    <button  onClick={() => handleCart(item.id)} style={{backgroundColor:"black",color:"white",width:"70px",height:"50px"}}>Add to cart</button>
                  </div>
               
              </div>
            );
          })}
      <div className="checkoutLeft">
        <div>
          <p className="checkoutTitle">YOUR BAG</p>
          <div style={{display:'flex'}}><p>TOTAL(2 ITEMS)</p><p style={{fontWeight:700}}> ₹</p></div>
           <p style={{textAlign:"left"}}>Items in your bag are not reserved — check out now to make them yours.</p>
           <div style={{marginTop:"64px"}}>
             {cartItems.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.pro_name}
              details={item.pro_det}
              img={item.pro_img[0]}
              price={item.price}
              key={item.id}
            />
          ))}</div>
        </div>
      </div>
      <div className="checkoutRight">
    
        <Subtotal  />
      
        {/* <h2>The Subtotal will go here</h2> */}
      </div>
    </div>
  );
};

export default Checkout;
