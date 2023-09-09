  export const backendReducer = (state = {products:[]}, action) => {
    switch (action.type) {
      case 'FETCH_BACKEND_DATA_REQUEST':
        return { ...state, loading: true, error: null };
      case 'FETCH_BACKEND_DATA_SUCCESS':
        return { ...state, loading: false, products: action.payload, error: null };
      case 'FETCH_BACKEND_DATA_FAILURE':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };


  export const getProductDetailsReducer = (state = {product:[]},action)=>{
    switch (action.type) {
      case 'PRODUCT_REQUEST':
        return {loading: true,};
      case 'GET_PRODUCT_SUCCESS':
        return {product: action.payload};
      case 'GET_PRODUCT_FAILURE':
        return {loading: false, error: action.payload};
      default:
        return state;
    }
  };

  export const cartReducer = (state = {cartItems:[]},action)=>{
    switch (action.type) {
      case 'ADD_CART_SUCCESS':
        const item = action.payload;
        const exist = state.cartItems.find(product=> product.id === item.id);
        if(exist){
          return {...state, cartItems: state.cartItems.map(data => data.product === exist.product ? data:item)}
        }
        else{
          return{...state,cartItems:state.cartItems.concat([item])}
        }
      case 'REMOVE_CART_SUCCESS':
        return {...state,cartItems:state.cartItems.filter(product=>product.id !== action.payload)};
      default:
        return state;
    }
  };
