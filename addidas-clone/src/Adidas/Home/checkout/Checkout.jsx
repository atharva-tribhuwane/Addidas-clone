import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import axios from "axios";

const Checkout = () => {
  const [cartItems, setSlider] = React.useState([]);

  const getData = () => {
    axios
      .get("https://backend-gamma-vert.vercel.app/pro ", {})
      .then((res) => setSlider(res.data.slice(2)))
      .catch((e) => {
        console.log(e);
      });
  };

  React.useEffect(() => {
    getData();
  }, []);

  // let ListCart = [];
  //   let TotalCart=0;
  //   Object.keys(items.Carts).forEach(function(item){
  //       TotalCart+=items.Carts[item].quantity * items.Carts[item].price;
  //       ListCart.push(items.Carts[item]);
  //   });
  //   function TotalPrice(price,tonggia){
  //       return Number(price * tonggia).toLocaleString('en-US');
  //   }

  return (
    <div className="checkout">
      <div className="checkoutLeft">
        <div>
          <p className="checkoutTitle">YOUR BAG</p>
          <div style={{ display: "flex" }}>
            <p>TOTAL(2 ITEMS)</p>
            <p style={{ fontWeight: 700 }}> ₹</p>
          </div>
          <p style={{ textAlign: "left" }}>
            Items in your bag are not reserved — check out now to make them
            yours.
          </p>
          <div style={{ marginTop: "64px" }}>
            {cartItems.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.pro_name}
                details={item.pro_det}
                img={item.pro_img[0]}
                price={item.price}
                key={item.id}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="checkoutRight">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
