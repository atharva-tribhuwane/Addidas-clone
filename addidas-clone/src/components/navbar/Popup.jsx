import React from 'react'
import { Popuplist } from './Popuplist'
import "./css/Navbar.css";
export const Popup = ({ prop }) => {
  console.log(prop);
  const comm = [
    {
      title: "FEATURED",
      items: [
        {
          name: "New Arrivals",
          link: ""
        },
        {
          name: "Manchester United",
          link: ""
        },
        {
          name: "Real Madrid",
          link: ""
        },
        {
          name: "Originals",
          link: ""
        },
        {
          name: "Arsenal",
          link: ""
        },
        {
          name: "Ultraboost",
          link: ""
        },
        {
          name: "Walking",
          link: ""
        },
        {
          name: "Stan Smith",
          link: ""
        },
        {
          name: "Rohit Sharma Collection",
          link: ""
        },
      ]
    },
    {
      title: "FOOTWEAR",
      items: [
        {
          name: "Running",
          link: ""
        },
        {
          name: "Running Shoe Finder",
          link: ""
        },
        {
          name: "Sneakers",
          link: ""
        },
        {
          name: "Originals",
          link: ""
        },
        {
          name: "Slides & Sandals",
          link: ""
        },
        {
          name: "Football",
          link: ""
        },
        {
          name: "Basketball",
          link: ""
        },
        {
          name: "Tennis",
          link: ""
        },
        {
          name: "Skateboarding",
          link: ""
        },
      ]
    },
    {
      title: "CLOTHING",
      items: [
        {
          name: "T-shirts & Tank Tops",
          link: ""
        },
        {
          name: "Joggers & Track Pants",
          link: ""
        },
        {
          name: "Originals",
          link: ""
        },
        {
          name: "Football Jerseys",
          link: ""
        },
        {
          name: "Shorts",
          link: ""
        },
        {
          name: "Jackets",
          link: ""
        },
        {
          name: "Hoodies",
          link: ""
        },
        {
          name: "TrackSuits",
          link: ""
        },
        {
          name: "Sweatshirts",
          link: ""
        },
      ]
    },
    {
      title: "ACCESSORIES",
      items: [
        {
          name: "Face Covers",
          link: ""
        },
        {
          name: "Socks",
          link: ""
        },
        {
          name: "All Bags",
          link: ""
        },
        {
          name: "Backpacks",
          link: ""
        },
        {
          name: "Gym & Training Bags",
          link: ""
        },
        {
          name: "Headwear",
          link: ""
        },
        {
          name: "Gloves",
          link: ""
        },
        {
          name: "Balls",
          link: ""
        }
      ]
    },
    {
      title: "SPORTS",
      items: [
        {
          name: "Running",
          link: ""
        },
        {
          name: "Gym & Training",
          link: ""
        },
        {
          name: "Football",
          link: ""
        },
        {
          name: "BasketBall",
          link: ""
        },
        {
          name: "Hiking & Outdoor",
          link: ""
        },
        {
          name: "Swim",
          link: ""
        },
        {
          name: "Skateboarding",
          link: ""
        },
        {
          name: "Golf",
          link: ""
        },
        {
          name: "Yoga",
          link: ""
        },
        {
          name: "Walking",
          link: ""
        }
      ]
    }
  ]
  return (
    // <div>
    <div className="at-nav-popup">

      {
        prop === "men" || prop === "women" || prop === "kids" ? <div>
          <Popuplist prop={comm} />
        </div> : null
      }
      {
        prop === "men"?
        <div>
          <div>All Men's</div>
          <div>All Men's Footwear</div>
          <div>All Men's Clothing</div>
          <div>All Men's Accessories</div>
          <div>All Men's Sports</div>
        </div>
        : prop === "women" ?
        <div>
        <div>All Women's</div>
        <div>All Women's Footwear</div>
        <div>All Women's Clothing</div>
        <div>All Women's Accessories</div>
        <div>All Women's Sports</div>
      </div> 
        : prop === "kids"?
        <div>
        <div>All Kid's</div>
        <div>All Kid's Footwear</div>
        <div>All Kid's Clothing</div>
        <div>All Kid's Accessories</div>
        <div>All Kid's Sports</div>
      </div>
        : null
      }



    </div>

    // </div>
  )
}
