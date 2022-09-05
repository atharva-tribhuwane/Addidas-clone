import React from "react";
import "./Subtotal.css";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useSelector } from "react-redux";

const Subtotal = ({ total,qty }) => {
  const totalPrice=useSelector((state)=>state.cart.total)
  return (
    <div style={{ width: "100%",marginBottom:"100px" }}>
      <Link to="./delivery" style={{ border: "none", textDecoration: "none" }}>
        <div className="div-brutal-video-checkout">
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
      <div className="subtotal-div-subtotal">
        <div style={{ padding: "20px" }}>
          <div className="order-title-subtotal">
            <p>ORDER SUMMARY</p>
          </div>

          <div className="order-values">
            <p>{qty} ITEMS</p>
            <p>{totalPrice}</p>
          </div>
          <div className="order-values">
            <p>DELIVERY</p>
            <p>FREE</p>
          </div>
          <div className="order-values">
            <div>
              <p style={{ fontSize: "24px", fontWeight: "500" }}>TOTAL</p>
              <p style={{ marginTop: "-15px" }}>(Inclusive of all taxes)</p>
            </div>
            <p style={{ fontSize: "24px", fontWeight: "500" }}>{total}</p>
          </div>
        </div>
      </div>
     
      <div style={{ display: "flex", marginTop:"30px"}}>
        <div>
          <img
            src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enIN/Images/visa-master-rupay-cd_tcm209-732258.png"
            alt="partners"
          />
        </div>
      </div>
    </div>
  );
};

export default Subtotal;
