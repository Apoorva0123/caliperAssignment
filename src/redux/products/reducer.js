import { actionType } from "./actionType";

const init = {
  productsData: [],
  isError: false,
  isLoading: false,
};

export const productsReducer = (state = init, { type, payload }) => {
  switch (type) {
    case actionType.FETCH_PRODUCT_DATA_SUCCESS:
      return {
        ...state, // keep the old state
        productsData: payload, // payload is the data from the server
        isError: false, // reset error
        isLoading: false, // reset loading
      };
    case actionType.FETCH_PRODUCT_DATA_FAILURE:
      return {
        ...state,
        isError: payload, // payload is the error from the server
        isLoading: false, // reset loading
      };

    case actionType.FETCH_PRODUCT_DATA_LOADING:
      return {
        ...state,
        isLoading: true, // set loading to true
      };
    default:
      return state; // return the old state
  }
};