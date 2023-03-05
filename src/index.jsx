
import {
  BrowserRouter as Router,
} from "react-router-dom";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import CartState from "./Context/Cart/CartState";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <CartState>
      <App />
    </CartState>
  </Router>
)