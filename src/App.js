import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./router/home/Home";
import Wishilist from "./router/wishlist/Wishlist";
import Cart from "./router/cart/Cart";
import SingleRout from './router/single-rout/SingleRout';
import Admin from "./router/admin/Admin";
import Pay from './router/pay/Pay'
import Truck from "./router/truck/Truck";

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pay" element={<Pay/>} />
        <Route path="/truck" element={<Truck/>} />
        <Route path="/wishilist" element={<Wishilist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path='/product/:id' element={<SingleRout/>}/>
        <Route path="*" element={<h1 className="not__found">404</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
