import logo from './logo.svg';
import './App.css';
import {Sign} from "./Comonents/Sign-Login/Sign-Login"
import { Login } from './Comonents/Login/Login';
import {ProductDetails} from "./Comonents/productDetails/productDetails"
function App() {
  return (
    <div className="App">
      <Sign/>
      <Login/>
      <ProductDetails/>
    </div>
  );
}

export default App;
