
import {BrowserRouter, Route, Link} from 'react-router-dom'
import HomeScreen from "./screens/HomeScreen"
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen';
import { useSelector } from 'react-redux';
import SigninScreen from './screens/SigninScreen';

function App() {

  //Adding of badge
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return (
    <BrowserRouter>
      <div className = "grid-container">
        <header className = "row">
            <div>
                <a className = "brand" href = "/">MARKet ni MARK</a>
            </div>

            <div>
                <Link to="/cart">
                <i className="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>
                {cartItems.length > 0 && (
                  <span className="badge">{cartItems.length}</span>
                )}
                </Link>
                <Link to="/signin">Sign In</Link>
            </div>
        </header>

        <main>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path = "/product/:id" component = {ProductScreen}></Route>
          <Route path="/signin" component={SigninScreen}></Route>
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
