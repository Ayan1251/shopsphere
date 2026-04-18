import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* PUBLIC ROUTE */}
        <Route path="/login" element={<Login />} />

        {/* PROTECTED ROUTES */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />

        <Route
          path="/product/:id"
          element={
            <ProtectedRoute>
              <ProductDetails />
            </ProtectedRoute>
          }
        />
      </Routes>

      {/* 🔥 TOAST CONTAINER */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </BrowserRouter>
  );
}

export default App;