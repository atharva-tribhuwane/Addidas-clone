import React from 'react'
import {AiFillStar} from "react-icons/ai";
import {AiOutlineHeart} from "react-icons/ai"
export const ProductDetails=()=> {
  return (
    <div>
    <div style={{display:"flex" }}>
        <div className='leftSide' style={{width:"1700px"}}>
            <div style={{ height:"600px" }}>
                <img   style={{width:"100%" , height:"100%"}}  src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cb1316406e584892bdb3a991001bd46d_9366/Adilette_Aqua_Slides_Black_F35543_01_standard.jpg" alt="" />
                
            </div>

            <hr style={{color:'white', marginBottom:"1px"}} />
           {/* <div style={{border:"1px solid grey", }}></div> */}
           </div>
       

       
        <div className='rightSide'  style={{ width:"1100px"}} >
            <div  style={{display:"flex", justifyContent:"space-between", padding:"5px", margin:"20px"}} className='sportsWearStars'>
                <p style={{color:"000000", fontFamily:"AdihausDIN, Helvetics, Arial,sans-serif", fontSize:"16px"}}>Sportswear</p>
               <div style={{display:"flex"}}> < AiFillStar  style={{marginTop:"4px"}}/> <AiFillStar style={{marginTop:"4px"}} /><AiFillStar style={{marginTop:"4px"}} /> <AiFillStar style={{marginTop:"4px"}} /><AiFillStar style={{marginTop:"4px"}}/><p style={{marginLeft:"3px"}}>7858</p> </div>
            </div>
            <p style={{color:"000000",fontFamily:"AdihausDIN, Helvetics, Arial,sans-serif", fontSize:"27px",textAlign:"left" ,margin:"15px",fontStyle:"italic", fontWeight:"bold"}}>ADILETTE AQUA SLIDES</p>
            <div style={{margin:"15px",fontFamily:"AdihausDIN, Helvetics, Arial,sans-serif", textAlign:"left"}}>
                <p>MRP: 2299.00</p>
                (Inclusive of all taxes)
            </div>
            <div style={{margin:"15px", textAlign:"left",fontFamily:"AdihausDIN, Helvetics, Arial,sans-serif", fontSize:"18px"}}>
                <p>Core Black/ Cloud White/ Core Black</p>
            </div>
            <div >
                <p style={{margin:"20px", textAlign:"left", fontWeight:"bold", fontSize:"18px"}}>Sizes</p>
               <div style={{margin:"20px", textAlign:"left",display:"flex", width:"200px",justifyContent:"space-between"}}>
               <div style={{border:"1px solid grey", width:"20%", textAlign:"center"}}>4</div>
                <div style={{border:"1px solid grey", width:"20%", textAlign:"center"}} >5</div>
                <div style={{border:"1px solid grey", width:"20%", textAlign:"center"}} >6</div>
                <div style={{border:"1px solid grey", width:"20%", textAlign:"center"}} >7</div>
               </div>

            </div>
            <div style={{display:"flex",margin:"15px", width:"400px",justifyContent:"space-between", height:"50px"}} >
            <button  style={{border:"1px solid black", width:"300px", backgroundColor:"#000000", color:"white"}}>ADD TO BAG</button>
            <div style={{border:"1px solid black", width:"60px"}}><AiOutlineHeart style={{margin:"auto", marginTop:"13px"}}/></div>
            </div>
            <div  style={{width:"400px", border:'1px solid black', height:"50px", textAlign:"center", margin:"15px"}}>
                <p  style={{textAlign:"left",paddingLeft:"10px", marginTop:"13px",fontFamily:"AdihausDIN, Helvetics, Arial,sans-serif", fontSize:"15px", fontWeight:"600"}}>FIND ALTERNATIVES</p>
            </div>
              

             <div  style={{textAlign:"left", margin:"15px", textDecoration:"underline", fontSize:"16px", fontFamily:"AdihausDIN, Helvetics, Arial,sans-serif"}}>
                <p>FREE SHIPPING FOR ALL ORDERS</p>
                <p style={{marginTop:"10px"}}>FREE RETURNS</p>

             </div>

        </div>
        
    </div>
    <div style={{display:"flex", width:"460px" }}>
                <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/961870fff7584bab8672a991001c22dc_9366/Adilette_Aqua_Slides_Black_F35543_04_standard.jpg" alt="" />
                <hr style={{color:'white', marginRight:"1px"}} />
                <img src="https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/ae8f7479d7b74b6b9d6ba991001c3d2d_9366/Adilette_Aqua_Slides_Black_F35543_05_standard.jpg" alt="" />
            </div>  

            <hr style={{color:'white', marginTop:"30px", marginLeft:"200px", width:"720px"}} />
            {/* <div> */}
                {/* <div style={{borderLeft:"1px solid black"}}></div> */}
                <p style={{marginLeft:0}} >Description</p>
            {/* </div> */}
    </div>
  )
}

