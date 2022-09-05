import React, { useState, useEffect } from "react";
import './whatshot.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReactPlayer from "react-player";


const Whatshot = () => {

 
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3.5,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <>
      <div className="main-wrapper-slider">
        <div className="title-wrapper">
          <p>WHATS HOT</p>
        </div>

        <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          shouldResetAutoplay={false}
          responsive={responsive}
          ssr={true}
          keyBoardControl={true}
          customTransition="all 1s"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          <div className="card-main-wrapper-whatshot">
            <div className="card-img-price-div">
              <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enIN/Images/running-4dfwd-launch-fw22-digital-hp-teaser-carousel-d_tcm209-913104.jpg" alt="Forum Low Shoes" />
              <div className="card-price-div">
              </div>
            </div>
            <div className="card-other-details"></div>
          </div>
          <div className="card-main-wrapper-whatshot">
            <div className="card-img-price-div">
            <ReactPlayer
            playing={true}
            loop={true}
            muted={true}
            width="100%"
            height="100%"
            url="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto,c_scale,w_0.5/video/upload/global%20brand%20publishing/Running/fw22-tinman-elite/running-fw22-tinman-elite-launch-com-hp-teaser-carousel-d.mp4"
          /> <div className="card-price-div">
              </div>
            </div>
            <div className="card-other-details"></div>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Whatshot;
