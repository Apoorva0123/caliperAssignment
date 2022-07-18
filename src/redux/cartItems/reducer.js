import { actionType } from "./actionType";

const init = {
  cartItems: [],
  cartTotal: 0,
  cartQuantity: 0,
};

export const cartReducer = (state = init, { type, payload }) => {
  switch (type) {
    case actionType.ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, payload],
        cartQuantity: state.cartQuantity + 1,
        cartTotal: state.cartTotal + payload.price,
      };
    case actionType.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== payload.id),
        cartQuantity: state.cartQuantity - 1,
        cartTotal: state.cartTotal - payload.price,
      };
    case actionType.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
        cartQuantity: 0,
        cartTotal: 0,
      };
    case actionType.GET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
        cartQuantity: payload.length,
        cartTotal: payload.reduce((acc, item) => acc + item.price, 0),
      };
    default:
      return state;
  }
};
