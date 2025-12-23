import React from 'react'
import {HashRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Auth from "./Pages/Auth/Auth.jsx";
import Payment from "./Pages/Payment/Payment.jsx";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Results from "./Pages/Results/Results.jsx";
import ProductDetail from './Pages/ProductDetail/ProductDetail.jsx'
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.jsx';

const stripePromise = loadStripe("pk_test_51Sh1dJFIUGg9xJAuxnEtpYVFDAZbZDRHw4fkv7cjONASWRhQZKLJ7XltpUCAyz0TFF3xFkrREat8tdp1lpw9QdEm00ccAE84lb")
function Routing() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />}/>
        <Route path="/payment" element={
          
          <ProtectedRoute
             msg={"you must log in to pay"} redirect={"/payments"}
            >
                <Elements stripe={stripePromise}>
                  <Payment />
                 </Elements>
          </ProtectedRoute>
      } 
      />
        <Route path="/orders" element={
         <ProtectedRoute
      msg={"you must log in to access your orders"}
      redirect={"/orders"}
    >
      <Orders />
    </ProtectedRoute>
          } 
          />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/category/:categoryName" element={<Results />} />
        

        <Route path="/cart" element={<Cart />} />
      </Routes>
    </HashRouter>
  );
}

export default Routing