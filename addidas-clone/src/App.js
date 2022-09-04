
import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from "./Adidas/Home/Home"
import FinalFoot from './Adidas/Main/Footer/FinalFoot'
import Men from './Adidas/Home/Sliders/Men';
import Checkout from './Adidas/checkout/Checkout';
import Delivery from './Adidas/Delivery/Delivery';

function App() {
  return (
    <div className="App">
       <Routes>
       {/* <Route path = "/men" element = {<Men/>}></Route> */}
       {/* <Route path = "/checkout" element = {<Checkout/>}></Route> */}
       {/* <Route path = "/delivery" element = {<Delivery/>}></Route> */}
       {/* <Route path = "/" element = {<Home/>}></Route> */}
       </Routes>
       <FinalFoot />
    </div>
  );
}

export default App;
