import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import { useEffect } from "react";
import { fetchProducts } from "./redux/products/action";
import { useDispatch } from "react-redux";
import { getCart } from "./redux/cartItems/action";
import CheckOut from "./components/CheckOut";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(getCart());
  }, []);

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkOut" element={<CheckOut/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
