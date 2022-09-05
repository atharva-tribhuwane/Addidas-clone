import React from "react";
import "./Subtotal.css";
import { Link } from "react-router-dom";
import { CgArrowLongRight } from "react-icons/cg";


const Subtotal = ({ total }) => {
  
  return (
    <div>
      <div className="subtotal">
        <div className="order-title">
          {" "}
          <p>ORDER SUMMARY</p>
        </div>
        <div className="order-values">
          <p>ORIGINAL PRICE</p>
          <p>{}</p>
        </div>
        <div className="order-values">
          <p>ON SALE</p>
          <p></p>
        </div>
        <div className="order-values">
          <p>{} ITEMS</p>
          <p></p>
        </div>
        <div className="order-values">
          <p>DELIVERY</p>
          <p>FREE</p>
        </div>
        <div className="order-values">
          <p>BUY MORE SAVE MORE</p>
          <p></p>
        </div>
        <div className="order-values">
          <p>TOTAL</p>
          <p>{total}</p>
        </div>
    
      </div>
      <div className="order-title">
     <p>ORDER DETAILS</p>

      </div>
    </div>
  );
};

export default Subtotal;
