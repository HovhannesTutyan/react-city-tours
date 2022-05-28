import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import CartScreen from './Screens/CartScreen';

function App() {

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart
  return (
        <BrowserRouter>
            <div className="grid-container">
                <header className="row">
                    <div>
                        <Link className="brand" to="/">ecom</Link>
                    </div>
                    <div>
                        <Link to="/cart">Cart
                            {cartItems.length > 0 && (
                                <span className="badge">{cartItems.length}</span>
                            )}
                        </Link>
                        <Link to="/signin">Sign in</Link>
                    </div>
                </header>
                <main>
                <Routes>
                   <Route path="/" element={ <HomeScreen /> } exact></Route>
                   <Route path="/product/:id" element={ <ProductScreen /> } exact></Route>
                   <Route path="/cart/:id" element={ <CartScreen /> }></Route>
                </Routes>
                </main>
                <footer className="row center">All rights reserved</footer>
            </div>
        </ BrowserRouter>
  );
}

export default App;
