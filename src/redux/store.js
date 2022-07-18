import {
  legacy_createStore as creatStore,
  combineReducers,
  applyMiddleware,
} from "redux";

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productsReducer } from "./products/reducer";
import { cartReducer } from "./cartItems/reducer";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

export const store = creatStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
