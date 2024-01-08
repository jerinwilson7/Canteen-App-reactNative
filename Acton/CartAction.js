import { CartServices } from "../Services";

const types ={
    GET_CART_ITEMS : "GET_CART_ITEMS",
    SET_IS_LOADING :"SET_IS_LOADING"
}

const addToCart = ({foodId}) => {
  console.log("action"+foodId)
    return dispatch => {
      dispatch({
        type: types.SET_IS_LOADING,
        payload: true,
      });
      CartServices.addToCart({foodId})
        .then(cartResponse => {
          console.log(cartResponse.data)
          
          dispatch({
            
            type: types.GET_CART_ITEMS,
            payload: cartResponse?.data,
          });
          dispatch({
            type: types.SET_IS_LOADING,
            payload: false,
          });
        })
        .catch((error) => {
          dispatch({ 
            type: types.SET_IS_LOADING,
            payload: false,
          });
        });
    }; 
  };
  
  const removeFromCart = ({foodId}) => {
    return dispatch => {
      dispatch({
        type: types.SET_IS_LOADING,
        payload: true,
      });
      CartServices.removeFromCart({foodId}) 
        .then(cartResponse => {
          dispatch({
            type: types.GET_CART_ITEMS,
            payload: cartResponse?.data,
          });
          dispatch({
            type: types.SET_IS_LOADING,
            payload: false,
          });
        })
        .catch(() => {
          dispatch({
            type: types.SET_IS_LOADING,
            payload: false,
          });
        });
    };
  };
  
  const getCartItems = () => {
    console.log("get")

    return dispatch => {
      dispatch({
        type: types.SET_IS_LOADING,
        payload: true,
      });
      CartServices.getCartItems()
        .then(cartResponse => {
          dispatch({
            type: types.GET_CART_ITEMS,
            payload: cartResponse?.data,
          });
          dispatch({
            type: types.SET_IS_LOADING,
            payload: false,
          });
        })
        .catch(() => {
          dispatch({
            type: types.SET_IS_LOADING,
            payload: false,
          });
        });
    };
  };
  
  export default {types, addToCart, removeFromCart, getCartItems};
