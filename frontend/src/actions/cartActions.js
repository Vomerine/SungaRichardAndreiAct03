import Axios from 'axios';
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

export const addToCart = (userId, productId, qty) => async (dispatch, getState) => {
 
  try {
    const { data } = await Axios.post('/api/cart/add', { userId, productId, qty });

    dispatch({ type: CART_ADD_ITEM, payload: data });
  } catch (error) {
    dispatch({
      type: CART_REMOVE_ITEM,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
  //localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
//create removeFromCart function
export const removeFromCart = (productId) => (dispatch, getState) => {
    dispatch({ type: CART_REMOVE_ITEM, payload: productId });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
  };