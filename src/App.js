import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Navigation';
import CustomersList from './components/CustomersList';
import CreateCustomer from './components/CreateCustomer';
import ProductsList from './components/ProductsList';
import CreateSale from './components/CreateSale';

function App() {
  return (
    <Router>
      <Navigation />

      <div className="p-4">
        <Route path="/" component={CustomersList} exact />
        <Route path="/customers" component={CustomersList} exact />
        <Route path="/customers/:id" component={CreateCustomer} exact />
        <Route path="/createCustomer" component={CreateCustomer} />
        <Route path="/sales" component={CreateSale} />
        <Route path="/products" component={ProductsList} />
        <Route path="/products/:id" component={CreateCustomer} />
      </div>
      
    </Router> 
  )
}

export default App;
