import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link} from 'react-router-dom';


// Components
import Header from '../Header/Header.jsx'

// Routes to pages
import PizzaOptions from '../PizzaOptions/PizzaOptions.jsx'
import CustomerInfo from '../CustomerInfo/CustomerInfo.jsx'
import Checkout from '../Checkout/Checkout.jsx'
import Administrator from '../Administrator/Administrator.jsx'


function App() {




  return (
    <Router>
      <div className='App'>
      <Header/>

        <img src='images/pizza_photo.png' />
        <p>Pizza is great.</p>
        {/* <Route path="/" exact>
          <Home />
        </Route>  */}
        <Route path="/pizza-options">
          <PizzaOptions />
        </Route>
        <Route path="/customer-info">
          <CustomerInfo />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/administrator">
          <Administrator />
        </Route>

      </div>
    </Router>
  );
}

export default App;
