import React from "react";
import "./FooterTop.css";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
function FooterTop() {
  return (
    <div className="footer-top-yellow">
      <div style={{marginLeft:"200px",display:"flex"}}>
      <div className="footer-top-yellow-div">
        {" "}
        <p className="footer-top-yellow-p">JOIN ADIDAS AND GET 15%</p><p className="footer-top-yellow-p"style={{marginTop:"-15px"}}> OFF</p>
      </div>

      <div className="div-brutal-video">
        <button className="button-brutal-video">
          {" "}
          <div className="div-underbutton">
            <p style={{ letterSpacing: "2px" }}>SIGN UP</p>
            <HiOutlineArrowNarrowRight
              style={{ fontSize: "30px", marginTop: "10px" }}
            />
          </div>{" "}
        </button>
      </div></div>
    </div>
  );
}

export default FooterTop;
