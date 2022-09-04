import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/navbar/Navbar';
import {Mens} from "./components/Mens"
import {Kids} from "./components/Kids"
import {Women} from "./components/Women"
import {Products} from "./components/Products";
import Project from "./components/ProductDetails"
import {Routes, Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* <Mens /> */}
        <Route path="/" element={<Products/>}></Route>
        <Route path="/prod/:id" element={<Project/>}></Route>
        <Route path="/mens" element={<Mens/>}></Route>
        <Route path="/" element={<Women/>}></Route>
        <Route path="/" element={<Kids/>}></Route>
        {/* <Products /> */}
        {/* <Kids /> */}
        {/* <Project/> */}
      </Routes>
    </div>
  );
}

export default App;
