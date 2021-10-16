import React from 'react'
import { Route,Switch,NavLink,Redirect } from 'react-router-dom';

import About from './components/About';
import Home from './components/Home';
import Product from './components/Product';
import ShowProduct from './components/ShowProduct';

import './App.css';

const App = () => {


  return (<div>

    <nav>
      <ul>
        <li> <NavLink exact activeClassName="selected" to="/home">Home</NavLink> </li>
        <li> <NavLink exact activeClassName="selected" to="/about">About</NavLink> </li>
        <li> <NavLink exact activeClassName="selected" to="/products">Products</NavLink> </li>
        <li> <NavLink exact activeClassName="selected" to="/products/show">Show Products</NavLink> </li>
      </ul>
    </nav>




    <Switch>
      <Route path="/" exact>
        <Redirect to="/home"/>
      </Route>
      <Route path="/home">
        <Home/>
      </Route>
      <Route path="/about">
        <About/>
      </Route>
      <Route path="/products" exact>
        <Product/>
      </Route>
      <Route path="/products/:productid">
        <ShowProduct/>
      </Route>
    </Switch>

  </div>)
}

export default App
