import React from 'react'
import { AiOutlineCreditCard, AiOutlineSearch, AiOutlineUser, AiOutlineShopping } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { GiReturnArrow } from "react-icons/gi";
import { BiHeart } from "react-icons/bi";
import "./css/Navbar.css";
import { Popup } from './Popup';
import {Link} from "react-router-dom"
export const Navbar = () => {
    const [showmen,setShowmen] = React.useState(false);
    const [showwomen,setShowwomen] = React.useState(false);
    const [showkids,setShowkids] = React.useState(false);
    const [showsports,setShowsports] = React.useState(false);
    const [showbrands,setShowbrands] = React.useState(false);
    const [showcollection,setShowcollection] = React.useState(false);
    const [showoutlet,setShowoutlet] = React.useState(false);

    return (
        <div className='Navbar'>
            <div className='nav-top-section'>
                <span>
                    <div><AiOutlineCreditCard fill="white" /></div>
                    <div><a href=""> Signup and get 15% off </a></div>
                </span>

                <span>
                    <div><TbTruckDelivery fill="white" /></div>
                    <div><a href="">Free Delivery For All Orders Now</a></div>
                </span>

                <span>
                    <div><GiReturnArrow fill="white" /></div>
                    <div><a href="">Free Returns</a></div>
                </span>
            </div>

            <div className='nav-middle-section'>
                <div>
                    <span><a href=""> help</a></span>
                    <span><a href=""> return</a></span>
                    <span><a href=""> order tracker</a></span>
                    <span><a href=""> signup</a></span>
                </div>
            </div>

            <div className="nav-nav-section">
                <div className="nav-logo-at">
                    <img src="https://www.adidas.co.in/glass/react/b857677/assets/img/icon-adidas-logo.svg" alt="" />
                </div>
                <div className="nav-links-at">
                    <span onMouseEnter={()=>setShowmen(true)} onMouseLeave={()=>setShowmen(false)}>MEN</span>
                    <span onMouseEnter={()=>setShowwomen(true)} onMouseLeave={()=>setShowwomen(false)}>WOMEN</span>
                    <span onMouseEnter={()=>setShowkids(true)} onMouseLeave={()=>setShowkids(false)}>KIDS</span>
                    <span onMouseEnter={()=>setShowsports(true)} onMouseLeave={()=>setShowsports(false)}>SPORTS</span>
                    <span onMouseEnter={()=>setShowbrands(true)} onMouseLeave={()=>setShowbrands(false)}>BRANDS</span>
                    <span onMouseEnter={()=>setShowcollection(true)} onMouseLeave={()=>setShowcollection(false)}>COLLECTION</span>
                    <span onMouseEnter={()=>setShowoutlet(true)} onMouseLeave={()=>setShowoutlet(false)}>OUTLET</span>
                </div>
                <div className="nav-search-at">
                    <div>
                        <div className='inp'><input type="text" placeholder='search'/></div>
                        <div><AiOutlineSearch /></div>
                    </div>
                    <div>
                        <div><Link to="/wishlist"><AiOutlineUser style={{cursor:"pointer"}}/></Link></div>
                        <div><Link to="/wishlist"><BiHeart style={{cursor:"pointer"}}/></Link></div>
                        <div><Link to="/wishlist"><AiOutlineShopping style={{cursor:"pointer"}}/></Link></div>
                    </div>
                </div>
            </div>
            {
            showmen ? <div  onMouseEnter={()=>setShowmen(true)} onMouseLeave={()=>setShowmen(false)} className="at-nav-popup"><Popup prop="men"/></div>
            :showwomen?<div  onMouseEnter={()=>setShowwomen(true)} onMouseLeave={()=>setShowwomen(false)} className="at-nav-popup"><Popup prop="women"/></div>
            :showkids?<div  onMouseEnter={()=>setShowkids(true)} onMouseLeave={()=>setShowkids(false)} className="at-nav-popup"><Popup prop="kids"/></div>
            :showsports?<div  onMouseEnter={()=>setShowsports(true)} onMouseLeave={()=>setShowsports(false)} className="at-nav-popup"><Popup prop="sports"/></div>
            :showbrands?<div  onMouseEnter={()=>setShowbrands(true)} onMouseLeave={()=>setShowbrands(false)} className="at-nav-popup"><Popup prop="brands"/></div>
            :showcollection?<div  onMouseEnter={()=>setShowcollection(true)} onMouseLeave={()=>setShowcollection(false)} className="at-nav-popup"><Popup prop="collection"/></div>
            :showoutlet?<div  onMouseEnter={()=>setShowoutlet(true)} onMouseLeave={()=>setShowoutlet(false)} className="at-nav-popup"><Popup prop="outlet"/></div>:null
            }
        </div>
    )
}
