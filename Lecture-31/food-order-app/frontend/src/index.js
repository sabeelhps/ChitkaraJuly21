import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom';
import { CartContextProvider } from './store/cart-context';

ReactDOM.render(
  <CartContextProvider>
    <Router>
      <App />
    </Router>
  </CartContextProvider>
  ,
  document.getElementById('root')
);


