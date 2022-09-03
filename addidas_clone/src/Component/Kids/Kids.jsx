import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import db from '../../db.json'
console.log(db)

const Kids = () => {

  
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 3 
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


 
    
 


  return (
    <>
    <div>Kids</div>
    <video width="100%" loop  autoplay  controls >
      <source src="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/bts-fw22-digital-glp-k-masthead-large-fullprice-dual-d_fswioz.mp4"  type="video/mp4"    />
    </video>
    <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/enIN/Images/adidas-lego-originals-ss22-flex-launch-clp-masthead-d_tcm209-823156.jpg"/>
    
    <div className='my-own-custom-container'>
    <Carousel responsive={responsive} gap={"5px"} >
      {db.products.map((ele)=>{return <>
       <div > 
        <img src={ele.url} style={{width: "90%"}}/>
        <p>{ele.title}</p>
        <p>{ele.status}</p>
       </div>

      </>})}

      
    
  </Carousel>;
  </div>
    
    
    </>
  )
}

export default Kids