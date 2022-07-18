//import React, { useEffect, useState } from 'react'
import "./Shop.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../redux/cartItems/action";

const Shop = () => {
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //     const fetchProducts = async() => {
  //         const res = await fetch('http://localhost:3500/products');
  //         const data = await res.json();
  //         setProducts(data);
  //     }
  //     fetchProducts()
  // }, [])

  const products = useSelector((store) => store.products.productsData);
  const dispatch = useDispatch();

  return (
    <div className="productWrapper">
      {products?.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.img} alt={product.title} />
          <h4>{product.title}</h4>
          <h5>₹{product.price}/-</h5>
          <button
            onClick={() => {
              dispatch(addItemToCart(product));
            }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Shop;
