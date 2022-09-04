import React from "react";

import "./FootBottom.css";
import In from "./In";
function FootBottom() {
  return (
    <div className="bottom-footer-wrapper">
      <div style={{display:"flex",justifyContent:"center",gap:"15px"}}>
        <p> Privacy Policy</p> <p className="line">|</p>
        <p>Terms and Conditions</p> <p className="line">|</p> <p> Cookies</p>
      </div>

      <div className="bottom-text-bottom-footer">
        <p> ©2021 adidas India Marketing Pvt. Ltd</p>
      </div>
    </div>
  );
}

export default FootBottom;
