import data from './data';
import Product from './component/Product';


function App() {
  return (
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
           <div className="row center">
               {
                    data.products.map((product) => (
                        <Product key={product._id} product={product} />
                    ))
               }
           </div>
        </main>
        <footer className="row center">All rights reserved</footer>
    </div>
  );
}

export default App;
