import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import axios from "axios";
import { ImCross } from "react-icons/im";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import CheckoutProduct from "./CheckoutProduct";
import { useDispatch } from "react-redux";
import { totalcartprice } from "../../Redux/Cart/Action";

const Checkout = () => {
  const [cartItems, setItems] = React.useState([]);


  const dispatch=useDispatch()
  const getData = () => {
    axios
      .get("https://backend-gamma-vert.vercel.app/pro", {})
      .then((res) => setItems(res.data.slice(20)))
      .catch((e) => {
        console.log(e);
      });
  };

  let totalprice = 0;
  let noofcarts = 0;
  cartItems.map((item) => {
    noofcarts += 1;
    totalprice += item.price;
  });
  console.log(totalprice)
  React.useEffect(() => {
    getData();
    dispatch(totalcartprice(totalprice))
  }, []);
 


  return (
    <>
      <div className="checkout">
        <div className="checkoutLeft">
          <div className="checkoutleft-divfirst">
            <p className="checkoutTitle">YOUR BAG</p>
            <div
              style={{
                display: "flex",
                fontSize: "22px",
                letterSpacing: "1px",
                marginTop: "-28px",
              }}
            >
              <p>TOTAL ({noofcarts} ITEMS)</p>
              <p style={{ fontWeight: 700, marginLeft: "10px" }}>
                {" "}
                ₹{totalprice}
              </p>
            </div>
            <p
              style={{
                textAlign: "left",
                fontSize: "20px",
                letterSpacing: "1px",
                marginTop: "-10px",
                marginBottom: "-20px",
              }}
            >
              Items in your bag are not reserved — check out now to make them
              yours.
            </p>
            <div
              className="main-wrapper-product-cart"
              style={{ marginTop: "64px" }}
            >
              {cartItems.map((item) => (
                <CheckoutProduct
                  image={item.pro_img[0]}
                  name={item.pro_name}
                  price={item.price}
                  id={item._id}
                />
              ))}
            </div>
          </div>
          <Link
            to="./delivery"
            style={{
              border: "none",
              textDecoration: "none",
              marginBottom: "60px",
            }}
          >
            <div className="div-brutal-video-checkout" style={{ width: "45%" }}>
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
          <Subtotal total={totalprice} qty={noofcarts} />
        </div>
      </div>
    </>
  );
};

export default Checkout;
