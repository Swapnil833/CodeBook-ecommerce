import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { FilterProvider } from './context/FilterContext';
import { ScrollToTop } from './components';
import { CartProvider } from "./context"

import './index.css';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <CartProvider>
      <FilterProvider>
        <ScrollToTop />
        <ToastContainer closeButton={false} autoClose={3000} position={"bottom-right"} />
        <App />
      </FilterProvider>
      </CartProvider>
    </Router>
  </React.StrictMode>
);