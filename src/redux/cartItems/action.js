import { actionType } from "./actionType";
import axios from "axios";

const addToCart = (product) => {
  return {
    type: actionType.ADD_TO_CART,
    payload: product,
  };
};
const removeFromCart = (product) => {
  return {
    type: actionType.REMOVE_FROM_CART,
    payload: product,
  };
};
const clearCart = () => {
  return {
    type: actionType.CLEAR_CART,
  };
};
const getCartItems = (product) => {
  return {
    type: actionType.GET_CART_ITEMS,
    payload: product,
  };
};

const getCart = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:8080/cart")
      .then((response) => {
        console.log(response.data);
        dispatch(getCartItems(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const addItemToCart = (product) => {
  return (dispatch) => {
    axios.post("http://localhost:8080/cart", product).then((res) => {
      dispatch(addToCart(res.data));
    });
  };
};

const removeItemFromCart = (product) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:8080/cart/${product.id}`)
      .then(() => {
        dispatch(removeFromCart(product));
      });
  };
};

export {
  addToCart,
  removeFromCart,
  clearCart,
  getCart,
  addItemToCart,
  removeItemFromCart,
};
