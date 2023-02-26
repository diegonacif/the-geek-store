import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { App } from './App'
import { Cart } from './components/Cart/Cart';
import { Login } from './pages/Login/Login';
import { ProductDetails } from './components/ProductDetails/ProductDetails';
import { AuthEmailProvider } from './contexts/AuthEmailProvider';
import { ProductsManagement } from './pages/ProductsManagement/ProductsManagement';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthEmailProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/products-management" element={<ProductsManagement />} />
        </Routes>
      </BrowserRouter>
    </AuthEmailProvider>
  </React.StrictMode>
)
