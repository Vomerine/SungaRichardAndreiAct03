
import {BrowserRouter, Route, Link} from 'react-router-dom'
import HomeScreen from "./screens/HomeScreen"
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen';
import { useDispatch, useSelector } from 'react-redux';
import SigninScreen from './screens/SigninScreen';
import { signout } from './actions/userActions';
import RegisterScreen from './screens/RegisterScreen';
import { listCart } from './actions/cartActions';
import { useEffect } from 'react';

function App() {

  // For cart badge
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  // For user signin/signout
  const userSignin = useSelector((state) => state.userSignin || state.userRegister);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  // Get cart items
  useEffect(() => {
    if(userInfo) dispatch(listCart());
  }, [dispatch, userInfo]);

  return (
    <BrowserRouter>
      <div className = "grid-container">
        <header className = "row">
            <div>
                <a className = "brand" href = "/">TECHTAIL</a>
            </div>

            <div>
                {userInfo ? ( 
                  <Link to="/cart">
                  <i className="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>
                  <span className="badge">{cartItems.length}</span>
                  </Link>
                ) : (
                  <Link to="/signin">  <i className="fa fa-shopping-cart fa-lg" aria-hidden="true"></i> </Link>
                )}
               

                {userInfo ? (
                <div className="dropdown">
                  <Link to="#">
                    {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                  </Link>
                  <ul className="dropdown-content">
                    <li>
                      <Link to="/" onClick={signoutHandler}>
                        Sign Out
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                <Link to="/signin">Sign In</Link>
              )}
            </div>
        </header>

        <main>
          <Route path = "/cart/:id?" component={CartScreen}></Route>
          <Route path = "/product/:id" component = {ProductScreen}></Route>
          <Route path = "/signin" component={SigninScreen}></Route>
          <Route path = "/register" component={RegisterScreen}></Route>
          <Route path = "/" component = {HomeScreen}exact></Route>
        </main>

        <footer className = "row center">
            All rights reserved
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
