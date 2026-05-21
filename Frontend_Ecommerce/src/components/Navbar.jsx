
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const Navbar = () => {

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const token =
    localStorage.getItem("token");

  const logoutHandler = () => {

    localStorage.removeItem("token");

    alert("Logged Out");

    window.location.href = "/login";

  };

  return (

    <div className="bg-black text-white p-4 flex justify-between items-center">

      <Link
        to="/"
        className="text-2xl font-bold"
      >
        E-Commerce
      </Link>

      <div className="flex gap-6 items-center">

        <Link to="/">
          Home
        </Link>

        <Link to="/cart">
          Cart ({cartItems.length})
        </Link>

        <Link to="/orders">
          Orders
        </Link>

        <Link
          to="/add-product"
          className="hover:text-yellow-300"
        >
          Add Product
        </Link>

        {
          token ? (

            <button
              onClick={logoutHandler}
              className="bg-red-500 px-4 py-1 rounded"
            >
              Logout
            </button>

          ) : (

            <>
              <Link to="/register">
                Register
              </Link>

              <Link to="/login">
                Login
              </Link>
            </>

          )
        }

      </div>

    </div>

  );
};

export default Navbar;