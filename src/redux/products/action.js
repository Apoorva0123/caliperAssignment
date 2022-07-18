import { actionType } from "./actionType";

const fetchProductDataSucess = (ProductData) => {
  // set data to ProductsData
  return {
    type: actionType.FETCH_PRODUCT_DATA_SUCCESS,
    payload: ProductData, // data from the server
  };
};

const fetchProductDataFailure = (error) => {
  // set error to true
  return {
    type: actionType.FETCH_PRODUCT_DATA_FAILURE,
    payload: error,
  };
};

const fetchProductDataLoading = () => {
  // set loading to true
  return {
    type: actionType.FETCH_PRODUCT_DATA_LOADING,
  };
};

const fetchProducts = () => async (dispatch) => {
  dispatch(fetchProductDataLoading()); // set loading to true

  try {
    const res = await fetch("http://localhost:8080/products"); // fetching data from the server
    const data = await res.json();
    if (data.message) {
      dispatch(fetchProductDataFailure(data.message));
    } else {
      dispatch(fetchProductDataSucess(data));
    }
  } catch (error) {
    dispatch(fetchProductDataFailure(error)); // set error to true
  }
};

export {
  fetchProductDataSucess,
  fetchProductDataFailure,
  fetchProductDataLoading,
  fetchProducts,
};
