import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <Router>
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/Food-Delivery-App/">
            Foody Knights
          </a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
        <Routes>
          <Route exact path="/Food-Delivery-App/" element={<HomeScreen/>} />
          <Route path="/Food-Delivery-App/product/:id" element={<ProductScreen/>} />
        </Routes>
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
    </Router>
  );
}

export default App;