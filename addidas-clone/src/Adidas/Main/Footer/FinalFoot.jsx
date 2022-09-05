
import FootBottom from "./FootBottom";
import Footer from "./Footer";
import FooterTop from "./FooterTop";

import React, { useState, useEffect, Fragment } from "react";



function FinalFoot() {
 

  return (
    <>
      <FooterTop style={{marginTop:"50px"}} />
       <Footer />
      <FootBottom />
    </>
  );
}

export default FinalFoot;
