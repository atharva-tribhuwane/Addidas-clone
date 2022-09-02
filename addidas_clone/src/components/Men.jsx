import React from "react";
// import React, { useRef, useState } from "react";
import Slider from "./Slider";
import "./css/Carouselstyle.css";
import ReactPlayer from "react-player";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export default function Men() {
  // let settings = {
  //   dot: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   cssEase: "linear"
  // }
  return (
    <div>
      <div>
        <ReactPlayer
          playing={true}
          loop={true}
          muted={true}
          width="100%"
          height="100%"
          url="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/running-ss22-ultraboost-launch-hp-masthead-large-3d-t_ow4fcp.mp4"
        />

        <h1 className="text">ULTRABOOST 22</h1>
        <p className="text1">
          Supreme energy return meets 360 fit improvement. Own your energy and
          achieve your impossible
        </p>
        <button className="button">Shop Now &#8594;</button>
      </div>
      {/* <Slider {...settings}>  */}
      <Slider></Slider>
      <h1 className="text2">MEN ORIGINALS</h1>
      <div className="flex-outside">
        <div className="flex-inside">
          <div className="border">
            <img
              src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/8636ee2b569e461db43bae0b00e3caa6_9366/NMD_V3_Shoes_Black_GW3064_01_standard.jpg"
              alt="shoes"
            ></img>
            <p>
              NMD_V3 Shoes <br></br>
              <span>Men Originals</span>
              <br></br>new
            </p>
            <p className="dis-percentage">-60%</p>
            <p className="discount-tag">
              <span className="org-price">₹2499.00</span>
              <span className="dis-price">₹1000.00</span>
            </p>
          </div>
          <div className="border">
            <img
              src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/ae163e593f614c9295e6addf0043b4c1_9366/B-Ball_Photo_Tee_White_HC2126_21_model.jpg"
              alt="shoes"
            ></img>
            <p>
              B-Ball Photo Tee <br></br>
              <span>Men Lifestyle</span>
              <br></br>new
            </p>
            <p className="dis-percentage">-60%</p>
            <p className="discount-tag">
              <span className="org-price">₹2499.00</span>
              <span className="dis-price">₹1000.00</span>
            </p>
          </div>
          <div className="border">
            <img
              src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/adf2f7e02bac4bd5a637ae11016fb3f9_9366/Equipment_Support_93_Shoes_Gold_GX3893_01_standard.jpg"
              alt="shoes"
            ></img>
            <p>
              Equipment Support 93 Shoes <br></br>
              <span>Men Originals</span>
              <br></br>new
            </p>
            <p className="dis-percentage">-60%</p>
            <p className="discount-tag">
              <span className="org-price">₹2499.00</span>
              <span className="dis-price">₹1000.00</span>
            </p>
          </div>
          <div className="border">
            <img
              src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/d8b19f5114d24d878e72ad2600f615cd_9366/adidas_Forta_Run_x_LEGO(r)_VIDIYOtm_Shoes_Black_G57947_01_standard.jpg"
              alt="shoes"
            ></img>
            <p>
              SST Short Sleeve Tee <br></br>
              <span>Men Originals</span>
              <br></br>new
            </p>
            <p className="dis-percentage">-60%</p>
            <p className="discount-tag">
              <span className="org-price">₹2499.00</span>
              <span className="dis-price">₹1000.00</span>
            </p>
          </div>
          <div className="border">
            <img
              src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/62bd7dd25f334bfd992bad2600aa7d19_9366/adidas_Forta_Run_x_LEGO(r)_VIDIYOtm_Shoes_Black_G57946_01_standard.jpg"
              alt="shoes"
            ></img>
            <p>
              Blocked 3-Stripes Tee <br></br>
              <span>Men Lifestyle</span>
              <br></br>new
            </p>
            <p className="dis-percentage">-60%</p>
            <p className="discount-tag">
              <span className="org-price">₹2499.00</span>
              <span className="dis-price">₹1000.00</span>
            </p>
          </div>
          <div className="border">
            <img
              src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/692dca8d91cc48098783acc9016fbcb3_9366/adidas_ZX_8000_x_LEGO(r)_Shoes_Black_GZ8216_01_standard.jpg"
              alt="shoes"
            ></img>
            <p>
              Superstar Shoes <br></br>
              <span>Men Lifestyle</span>
              <br></br>online exclusive
            </p>
            <p className="dis-percentage">-60%</p>
            <p className="discount-tag">
              <span className="org-price">₹2499.00</span>
              <span className="dis-price">₹1000.00</span>
            </p>
          </div>
          <div className="border">
            <img
              src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/e7770d6427de4d1386b7ac38013a7491_9366/adidas_x_Classic_LEGO(r)_Bricks_Long_Sleeve_Fitted_Tee_Black_GN6778_01_laydown.jpg"
              alt="shoes"
            ></img>
            <p>
              Forum Low Shoes <br></br>
              <span>Men Originals</span>
              <br></br>new
            </p>
            <p className="dis-percentage">-60%</p>
            <p className="discount-tag">
              <span className="org-price">₹2499.00</span>
              <span className="dis-price">₹1000.00</span>
            </p>
          </div>
          <div className="border">
            <img
              src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/3260d91059974194af13adbb00ebc5a3_9366/adidas_x_LEGO(r)_Sport_Shoes_Red_H01503_01_standard.jpg"
              alt="shoes"
            ></img>
            <p>
              Na-Kel Message Tee(Gender Neutral) <br></br>
              <span>Originals</span>
              <br></br>online exclusive
            </p>
            <p className="dis-percentage">-60%</p>
            <p className="discount-tag">
              <span className="org-price">₹2499.00</span>
              <span className="dis-price">₹1000.00</span>
            </p>
          </div>
          <div className="border">
            <img
              src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/ed6a470260aa476aa488acc90186d093_9366/adidas_ZX_8000_x_LEGO(r)_Shoes_Yellow_H04832_01_standard.jpg"
              alt="shoes"
            ></img>
            <p>
              Trefoil Tee <br></br>
              <span>Men Lifestyle</span>
              <br></br>new
            </p>
            <p className="dis-percentage">-60%</p>
            <p className="discount-tag">
              <span className="org-price">₹2499.00</span>
              <span className="dis-price">₹1000.00</span>
            </p>
          </div>
          <div className="border">
            <img
              src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/7e16603bc7c64e109acbad4900c10e7a_9366/adidas_x_Classic_LEGO(r)_Tee_Green_H26660_01_laydown.jpg"
              alt="shoes"
            ></img>
            <p>
              Graphic Stocked Fish Tee <br></br>
              <span>Men Lifestyle</span>
              <br></br>new
            </p>
            <p className="dis-percentage">-60%</p>
            <p className="discount-tag">
              <span className="org-price">₹2499.00</span>
              <span className="dis-price">₹1000.00</span>
            </p>
          </div>
          <div className="border">
            <img
              src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/0be395b38e4a43519bd1ad26008aecea_9366/adidas_x_LEGO(r)_Sport_Shoes_Black_FZ5438_01_standard.jpg"
              alt="shoes"
            ></img>
            <p>
              Jehn Message Tee(Gender Neutral) <br></br>
              <span>Skateboarding</span>
              <br></br>online exclusive
            </p>
            <p className="dis-percentage">-60%</p>
            <p className="discount-tag">
              <span className="org-price">₹2499.00</span>
              <span className="dis-price">₹1000.00</span>
            </p>
          </div>
          <div className="border">
            <img
              src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/bf173c5ee1ac436094a7ad0c0047d94f_9366/adidas_x_LEGO(r)_Graphic_Tee_Black_GU8901_01_laydown.jpg"
              alt="shoes"
            ></img>
            <p>
              Nora Message Tee(Gender Neutral) <br></br>
              <span>originals</span>
              <br></br>online exclusive
            </p>
            <p className="dis-percentage">-60%</p>
            <p className="discount-tag">
              <span className="org-price">₹2499.00</span>
              <span className="dis-price">₹1000.00</span>
            </p>
          </div>
        </div>
      </div>
      {/* </Slider> */}
      <div className="text2">
        <h1>ESSENTIALS</h1>
      </div>
      {/* <Slider {...settings}>  */}
      <div className="flex-outside">
        <div className="flex-inside">
          <div className="border1">
            <div className="check">
              <ReactPlayer
                playing={true}
                loop={true}
                muted={true}
                url="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto,c_scale,w_0.5/video/upload/global%20brand%20publishing/Membership/Members%20Week/Launch%20Phase/brand-ss22-membersweek-launch-glp-m-teaser-large-hero-t.mp4"
              ></ReactPlayer>
            </div>{" "}
            {/* <img src='https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/62bd7dd25f334bfd992bad2600aa7d19_9366/G57946_01_standard.jpg' alt="shoes"></img> */}
            <p className="spacing">
              adidas Forta Run x LEGO® VIDIYO™ Shoes <br></br>
              <span>Performance</span>
            </p>
          </div>
          <div className="border1">
            <ReactPlayer
              playing={true}
              loop={true}
              muted={true}
              url="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/running-ss22-ultraboost-launch-hp-masthead-large-3d-t_ow4fcp.mp4"
            />
            <p className="spacing">
              FORUM <br></br>
              <span>Innovative in the 80s, legandary today.</span>
            </p>
          </div>
          <div className="border1">
            <ReactPlayer
              playing={true}
              loop={true}
              muted={true}
              url="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto,c_scale,w_0.5/video/upload/global%20brand%20publishing/Originals/Y2K/Launch/originals-ss22-y2k-dual-hp-teaser-carousel-launch.mp4"
            />
            <p className="spacing">
              ULTRA 4D SHOES <br></br>
              <span>
                Precisely coded running shoes made in part with recycled
                materials.
              </span>
            </p>
          </div>
          <div className="border1">
            <div className="check">
              <ReactPlayer
                playing={true}
                loop={true}
                muted={true}
                url="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/running-ss22-ultraboost-launch-hp-masthead-large-3d-t_ow4fcp.mp4"
              />
            </div>
            <p className="spacing">
              THAT'S SERIOUSLY JOKES <br></br>
              <span>
                An expensive remix of the 2000s. That's so Astir and so ADI2000.
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* </Slider> */}
    </div>
  );
}