import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home.jsx";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";

import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetail";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        path="/cart"
        element={<Cart />}
      />
      <Route
        path="/product/:id"
        element={<ProductDetail />}
      />
      <Route
        path="/orders"
        element={<Orders />}
      />

      <Route
        path="/contact"
        element={<Contact />}
      />
      <Route
  path="/add-product"
  element={<AddProduct />}
/>
<Route
  path="/edit-product/:id"
  element={<EditProduct />}
/>
    </Routes>
  );
};

export default App;