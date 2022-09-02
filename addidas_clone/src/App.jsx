import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/navbar/Navbar';
import {Mens} from "./components/Mens"
import {Kids} from "./components/Kids"
import Men from "./components/Men"
import {Products} from "./components/Products";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Mens />
      {/* <Products /> */}
      {/* <Kids /> */}
    </div>
  );
}

export default App;
