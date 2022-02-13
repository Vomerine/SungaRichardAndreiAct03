
import {BrowserRouter, Route, Link} from 'react-router-dom'
import HomeScreen from "./screens/HomeScreen"
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen';
import { useSelector } from 'react-redux';

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
                Cart
                {cartItems.length > 0 && (
                  <span className="badge">{cartItems.length}</span>
                )}
                </Link>
                <a href = "/signin">Sign In</a>
            </div>
        </header>

        <main>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path = "/product/:id" component = {ProductScreen}></Route>
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
