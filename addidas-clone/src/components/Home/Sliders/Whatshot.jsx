import React, { useState, useEffect } from "react";
import './whatshot.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReactPlayer from "react-player";


const Whatshot = () => {

 
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
      slidesToSlide: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
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
            <div className="card-other-details-whatshot">
              <h2 className="card-other-details-h">REDEFINING FORWARD MOTION. FOREVER.</h2>
              <p className="card-other-details-p">Innovative. Disruptive. adidas 4DFWD. The future of running.</p>
              <button className="viewall-button-whatshot"> SHOP NOW</button>
            </div>
          </div>
         
          <div className="card-main-wrapper-whatshot">
          <div className="card-img-price-div">
              <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enIN/Images/1050x1400TC_tcm209-932324.jpg" alt="Forum Low Shoes" />
              <div className="card-price-div">
              </div>
            </div>
            <div className="card-other-details-whatshot">

            <h2 className="card-other-details-h">CREATE NEW PATHS</h2>
              <p className="card-other-details-p">Take on the city with the NMD_V3.</p>
              <button className="viewall-button-whatshot"> SHOP NOW</button>
            </div>
          </div>
          <div className="card-main-wrapper-whatshot">
          <div className="card-img-price-div">
              <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enIN/Images/fw22-sw-hotwheels-tease-hp-tc-d_tcm209-916685.jpeg" alt="Forum Low Shoes" />
              <div className="card-price-div">
              </div>
            </div>
            <div className="card-other-details-whatshot">
            <h2 className="card-other-details-h">Sean Wotherspoon. Hot Wheels™.</h2>
              <p className="card-other-details-p">    </p>
              <button className="viewall-button-whatshot"> SHOP NOW</button>
            </div>
          </div>
          <div className="card-main-wrapper-whatshot">
          <div className="card-img-price-div">
              <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enIN/Images/TRAINING-FW22-HIIT-LAUNCH-HP-TEASER-CAROUSEL-D_tcm209-908406.jpg" alt="Forum Low Shoes" />
              <div className="card-price-div">
              </div>
            </div>
            <div className="card-other-details-whatshot">
            <h2 className="card-other-details-h">FOR ALL THE WAYS YOU MOVE.</h2>
              <p className="card-other-details-p">Innovative. Disruptive. adidas 4DFWD. The future of running.</p>
              <button className="viewall-button-whatshot"> SHOP NOW</button>
            </div>
          </div>
          
          <div className="card-main-wrapper-whatshot">
          <div className="card-img-price-div">
              <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enIN/Images/1050x1400_tcm209-928621.jpg" alt="Forum Low Shoes" />
              <div className="card-price-div">
              </div>
            </div>
            <div className="card-other-details-whatshot">
            <h2 className="card-other-details-h">REDEFINING FORWARD MOTION. FOREVER.</h2>
              <p className="card-other-details-p">Innovative. Disruptive. adidas 4DFWD. The future of running.</p>
              <button className="viewall-button-whatshot"> SHOP NOW</button>
            </div>
          </div>
          <div className="card-main-wrapper-whatshot">
          <div className="card-img-price-div">
              <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enIN/Images/fw22-football-manchesterunited-third-hp-tcc_tcm209-914959.jpg" alt="Forum Low Shoes" />
              <div className="card-price-div">
              </div>
            </div>
            <div className="card-other-details-whatshot">
            <h2 className="card-other-details-h">REDEFINING FORWARD MOTION. FOREVER.</h2>
              <p className="card-other-details-p">Innovative. Disruptive. adidas 4DFWD. The future of running.</p>
              <button className="viewall-button-whatshot"> SHOP NOW</button>
            </div>
          </div>
          <div className="card-main-wrapper-whatshot">
          <div className="card-img-price-div">
              <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enIN/Images/fw22-football-juventus-away-hp-tcc_tcm209-906530.jpg" alt="Forum Low Shoes" />
              <div className="card-price-div">
              </div>
            </div>
            <div className="card-other-details-whatshot">
            <h2 className="card-other-details-h">REDEFINING FORWARD MOTION. FOREVER.</h2>
              <p className="card-other-details-p">Innovative. Disruptive. adidas 4DFWD. The future of running.</p>
              <button className="viewall-button-whatshot"> SHOP NOW</button>
            </div>
          </div>
          <div className="card-main-wrapper-whatshot">
          <div className="card-img-price-div">
              <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enIN/Images/running-fw22-solar-control-launch-hp-teaser-carousel-d_tcm209-900911.jpg" alt="Forum Low Shoes" />
              <div className="card-price-div">
              </div>
            </div>
            <div className="card-other-details-whatshot">
            <h2 className="card-other-details-h">REDEFINING FORWARD MOTION. FOREVER.</h2>
              <p className="card-other-details-p">Innovative. Disruptive. adidas 4DFWD. The future of running.</p>
              <button className="viewall-button-whatshot"> SHOP NOW</button>
            </div>
          </div>
          <div className="card-main-wrapper-whatshot">
          <div className="card-img-price-div">
              <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enIN/Images/TCWalking_tcm209-913876.jpg" alt="Forum Low Shoes" />
              <div className="card-price-div">
              </div>
            </div>
            <div className="card-other-details-whatshot">
            <h2 className="card-other-details-h">REDEFINING FORWARD MOTION. FOREVER.</h2>
              <p className="card-other-details-p">Innovative. Disruptive. adidas 4DFWD. The future of running.</p>
              <button className="viewall-button-whatshot"> SHOP NOW</button>
            </div>
          </div>
          <div className="card-main-wrapper-whatshot">
          <div className="card-img-price-div">
              <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enIN/Images/Collection-FW22-Thebe_Magugu-global-launch-hp-teaser-carousel_tcm209-902165.jpg" alt="Forum Low Shoes" />
              <div className="card-price-div">
              </div>
            </div>
            <div className="card-other-details-whatshot">
            <h2 className="card-other-details-h">REDEFINING FORWARD MOTION. FOREVER.</h2>
              <p className="card-other-details-p">Innovative. Disruptive. adidas 4DFWD. The future of running.</p>
              <button className="viewall-button-whatshot"> SHOP NOW</button>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Whatshot;