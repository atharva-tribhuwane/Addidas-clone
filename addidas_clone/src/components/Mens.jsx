import React from 'react'
import { Product } from "./Product";
import "./css/Mens.css";
import Slider from './Slider';
export const Mens = () => {
    const arr = new Array(12).fill(0);
    return (
        <div>
            <div className='at-mens-main'>
                <div className='at-mens-sec-top'>
                    {/* <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/enIN/Images/football-fw22-x-speedportal-pre-launch-glp-m-mh-large-d_tcm209-906853.jpg" alt="" /> */}
                    <div>
                        <h1>FASTER IN ALL DIMENSIONS</h1>
                        <div>Explore multidimensional speed with the new X Speedportal and Rick and Morty</div>
                        <div><button>SHOP NOW</button></div>
                    </div>
                </div>
                <div className='at-mens-sec-mid'>
                    {/* <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/enIN/Images/football-fw22-x-speedportal-pre-launch-glp-m-mh-large-d_tcm209-906853.jpg" alt="" /> */}
                    <div>
                        <video muted loop autoPlay style={{ width: "100%" }}>
                            <source src="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/running-fw22-supernova-launch-glp-m-masthead-large-d_wcetta.mp4" type="video/mp4" />
                            Your browser does not support HTML5 video.
                        </video>
                    </div>
                    <div>
                        <h1>COMFORT MEETS ENERGY</h1>
                        <div>Run comfortable no matter the terrain. Supernova 2.</div>
                        <div><button>SHOP NOW</button></div>
                    </div>
                </div>
                <div className='at-mens-sec-bottom'>
                    <div>
                        <div><img src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/6e968036b4db42fa8a48aed701411dc7_9366/solarcontrol-shoes.jpg" alt="" /></div>
                        <div><a href="">SNEAKERS</a></div>
                    </div>
                    <div>
                        <div><img src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/15d4417879754ff5a00dae8800e43277_9366/fleece-hoodie.jpg" alt="" /></div>
                        <div><a href="">PANTS</a></div>
                    </div>
                    <div>
                        <div><img src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/fbdd2263907447ada590ae8c00bd96aa_9366/fleece-pants.jpg" alt="" /></div>
                        <div><a href="">HOODIES AND SWEATSHIRTS</a></div>
                    </div>
                    <div>
                        <div><img src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/f2e770f13b024b64bf45ae5701034d6b_9366/d4s-tee.jpg" alt="" /></div>
                        <div><a href="">TOPS</a></div>
                    </div>
                </div>

            </div>
            <div style={{ marginTop: "10%" }}>
                <h1 style={{ width: "80%", margin: "auto", textAlign: "start", marginBottom: "0" }}>MEN ORIGINALS</h1>
                <Slider style={{ marginTop: "0" }}></Slider>
            </div>
            <div style={{ marginTop: "10%" }}>
                <h1 style={{ width: "80%", margin: "auto", textAlign: "start", marginBottom: "0" }}>ESSENTIALS</h1>
                <div className='at-mens-sec-bottom'>
                    <div style={{backgroundColor:"white"}}>
                        <div>
                            <video muted loop autoPlay style={{ width: "100%" }}>
                                <source src="https://brand.assets.adidas.com/image/upload/q_auto,vc_auto,c_scale,w_0.5/enIN/Images/football-fw22-federations-agnostic-excluding-belgium-glpm-tcc_tcm209-931537.mp4" type="video/mp4" />
                                Your browser does not support HTML5 video.
                            </video>
                        </div>
                        <div style={{textAlign:"start", fontWeight:"500"}}>FIFA WORLD CUP 2022 KITS</div>
                        <div style={{textAlign:"start", height:"50px", fontSize:"16px"}}>It's time to show your colours. Get united by the love of the beautiful game.</div>
                        <div style={{textAlign:"start"}}><a href="" style={{textDecoration:"none", color:"black"}}>SHOP NOW</a></div>
                    </div>
                    <div style={{backgroundColor:"white"}}>
                        <div><img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enIN/Images/fw22-sw-hotwheels-tease-hp-tc-d_tcm209-916685.jpeg" alt="" style={{ width: "100%" }} /></div>
                        <div style={{textAlign:"start", fontWeight:"500"}}>Sean Wotherspoon. Hot Wheels.</div>
                        <div style={{textAlign:"start", height:"50px", fontSize:"16px"}}>The high-octane collection is available</div>
                        <div style={{textAlign:"start"}}><a href="" style={{textDecoration:"none", color:"black"}}>SHOP NOW</a></div>
                    </div>
                    <div style={{backgroundColor:"white"}}>
                        <div>
                            <video muted loop autoPlay style={{ width: "100%" }}>
                                <source src="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto,c_scale,w_0.5/video/upload/sportswear-FW22-chapter2-global-introduce-glpmen-teasercardcarousel-d_hawxe8.mp4" type="video/mp4" />
                                Your browser does not support HTML5 video.
                            </video>
                        </div>
                        <div style={{textAlign:"start", fontWeight:"500"}}>COMFORT UNLOCKS POSSIBILITIES</div>
                        <div style={{textAlign:"start", height:"50px", fontSize:"16px"}}>Early access to our latest sportswear collection is here.</div>
                        <div style={{textAlign:"start"}}><a href="" style={{textDecoration:"none", color:"black"}}>EXPLORE NOW</a></div>
                    </div>
                    <div style={{backgroundColor:"white"}}>
                        <div><img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enIN/Images/1050x1400TC_tcm209-932324.jpg" alt="" style={{ width: "100%" }} /></div>
                        <div style={{textAlign:"start", fontWeight:"500"}}>CREATE NEW PATHS</div>
                        <div style={{textAlign:"start", height:"50px", fontSize:"16px"}}>Take on th city with the NMD_V3</div>
                        <div style={{textAlign:"start"}}><a href="" style={{textDecoration:"none", color:"black"}}>SHOP NOW</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
