import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';

function App() {
  return (
        <BrowserRouter>
            <div className="grid-container">
                <header className="row">
                    <div>
                        <a className="brand" href="index.html">ecom</a>
                    </div>
                    <div>
                        <a href="cart.html">Cart</a>
                        <a href="signin.html">Sign in</a>
                    </div>
                </header>
                <main>
                <Routes>
                   <Route path="/" element={ <HomeScreen /> } exact></Route>
                   <Route path="/product/:id" element={ <ProductScreen /> } exact></Route>
                </Routes>
                </main>
                <footer className="row center">All rights reserved</footer>
            </div>
        </ BrowserRouter>
  );
}

export default App;
