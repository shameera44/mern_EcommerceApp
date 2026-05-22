import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Cart from "./pages/Cart.jsx";

import Contact from "./pages/Contact.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import AddProduct from "./pages/AddProduct.jsx";
import EditProduct from "./pages/EditProduct.jsx";

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