import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/navbar/Navbar';
import {Mens} from "./components/Mens"
import {Kids} from "./components/Kids"
import {Women} from "./components/Women"
import {Products} from "./components/Products";
import Project from "./components/ProductDetails"
import {Routes, Route} from "react-router-dom";
import { Wishlist } from './components/Wishlist';
import { Sign } from './components/Sign-Login';
import { Login } from './components/Login';
import Payment from './components/Payment';
import Home from './components/Home/Home';
import { Log1 } from './components/Log1';
import Checkout from './components/Checkout';
import { LoginContext, LoginContextProvider } from './context/LoginContext';
function App() {
  return (
  
    <div className="App">
      <Navbar />
      {/* <Home></Home> */}
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/prod/:id" element={<Project/>}></Route>
        <Route path="/mens" element={<Mens/>}></Route>
        <Route path="/womens" element={<Women/>}></Route>
        <Route path="/kids" element={<Kids/>}></Route>
        <Route path="/signup" element={<Sign/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
      </Routes>
      {/* <Wishlist></Wishlist> */}
      {/* <Sign></Sign> */}
      {/* <Login></Login> */}
      {/* <Payment></Payment> */}
      {/* <Routes> */}
        {/* <Mens /> */}
         {/* <Route path="/" element={<Products/>}></Route> */}
        {/*<Route path="/prod/:id" element={<Project/>}></Route>
         */}
        {/* <Products /> */}
        {/* <Kids /> */}
        {/* <Project/> */}
        {/* <ChakraProvider> */}
        {/* <Route path="/signup" element={<Sign/>}></Route> */}
        {/* <Route path="/login" element={<Login/>}></Route> */}
        {/* </ChakraProvider> */}
        {/* <Route path="/wishlist" element={<Wishlist/>}></Route> */}
      {/* </Routes> */}
    </div>
  );
}

export default App;
