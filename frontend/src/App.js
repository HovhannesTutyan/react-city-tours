import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signout } from './actions/userActions';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import CartScreen from './Screens/CartScreen';
import SigninScreen from './Screens/SigninScreen';
import ShippingAddressScreen from './Screens/ShippingAddressScreen';
import PaymentMethodScreen from './Screens/PaymentMethodScreen';
import PlaceOrderScreen from './Screens/PlaceOrderScreen';

function App() {

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch()
  const signoutHandler = () => {
    dispatch(signout())
  }

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

                        {
                            userInfo ? (
                                <div className="dropdown">
                                    <Link to="#"> {userInfo.email} <i className="fa fa-caret-down"></i>{' '} </Link>
                                    <ul className="dropdown-content">
                                        <Link to="#signout" onClick={ signoutHandler }> Sign Out </Link>
                                    </ul>
                                </div>
                            ) :
                            (
                                <Link to="/signin">Sign in</Link>
                            )
                        }
                    </div>
                </header>
                <main>
                <Routes>
                   <Route path="/" element={ <HomeScreen /> } exact></Route>
                   <Route path="/product/:id" element={ <ProductScreen /> } exact></Route>
                   <Route path="/cart/:id" element={ <CartScreen /> }></Route>
                   <Route path="/signin" element={ <SigninScreen /> }></Route>
                   <Route path="/shipping" element={<ShippingAddressScreen />}> </Route>
                   <Route path="/payment" element={<PaymentMethodScreen />}> </Route>
                   <Route path="/placeorder" element={<PlaceOrderScreen />}> </Route>
                </Routes>
                </main>
                <footer className="row center">All rights reserved</footer>
            </div>
        </ BrowserRouter>
  );
}

export default App;
