import Axios from 'axios';
import { 
  CART_ADD_ITEM, 
  CART_REMOVE_ITEM,
  CART_LIST_REQUEST,
  CART_LIST_SUCCESS,
  CART_LIST_FAIL,
} from '../constants/cartConstants';

export const listCart = () => async(dispatch)=>{
  const user = JSON.parse(localStorage.getItem('userInfo'));
  const userId = user._id;
  dispatch({ type: CART_LIST_REQUEST });

  try {
    const {data} = await Axios.post('/api/cart/', { userId });
    dispatch({ type:CART_LIST_SUCCESS, payload:data });
  }catch (error) {
    dispatch({type:CART_LIST_FAIL, payload:error.response && error.response.data.message
      ? error.response.data.message
      : error.message,});
  };
}

export const addToCart = (productId, qty) => async (dispatch, getState) => {
  const user = JSON.parse(localStorage.getItem('userInfo'));
  const userId = user._id;
  try {
    const { data } = await Axios.post('/api/cart/add', { userId, productId, qty });

    dispatch({ type: CART_LIST_REQUEST });

  } catch (error) {
    dispatch({
      type: CART_LIST_FAIL,
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