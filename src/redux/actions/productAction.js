import axios from 'axios';
const URL ="https://flipkart-backend-ba6k.onrender.com";

export const fetchBackendData = () => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_BACKEND_DATA_REQUEST' });

    await axios.get(`${URL}/products`)
      .then((response) => {
        dispatch({ type: 'FETCH_BACKEND_DATA_SUCCESS', payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_BACKEND_DATA_FAILURE', payload: error.message });
      });
  };
};

export const getProductsDetails = (id)=>{
  return async (dispatch) => {
    await axios.get(`${URL}/product/${id}`)
      .then((response) => {
        console.log(response.data);
        dispatch({ type: 'GET_PRODUCT_SUCCESS', payload: response.data});
      })
      .catch((error) => {
        dispatch({ type: 'GET_PRODUCT_FAILURE', payload: error.message});
      });
  };
};


export const addToCart = (id,quantity)=>{
  return async (dispatch) => {
    await axios.get(`${URL}/product/${id}`)
      .then((response) => {
        dispatch({ type: 'ADD_CART_SUCCESS', payload: response.data});
      })
      .catch((error) => {
        dispatch({ type: 'ADD_CART_FAILURE', payload: error.message});
      });
  };
};

export const removeToCart = (id)=>{
  return async (dispatch) => {
    dispatch({ type:'REMOVE_CART_SUCCESS',payload:id});
  };
};
