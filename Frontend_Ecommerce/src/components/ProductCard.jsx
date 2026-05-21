import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import axios from "axios";

const ProductCard = ({
  product,
  fetchProducts,
}) => {

  const dispatch = useDispatch();

  // DELETE PRODUCT

  const deleteHandler = async () => {

    try {

      const token =
        localStorage.getItem("token");

      await axios.delete(
        `http://localhost:5000/products/${product._id}`,
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

      alert("Product Deleted");

      fetchProducts();

    } catch (error) {

      console.log(error);

      alert("Only Admin Can Delete");

    }
  };

  return (

    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 duration-300">

      {/* PRODUCT IMAGE */}

      <img
        src={product.image}
        alt={product.name}
        className="w-full h-56 object-cover"
      />

      {/* PRODUCT DETAILS */}

      <div className="p-4">

        <h2 className="text-2xl font-bold">
          {product.name}
        </h2>

        <p className="text-gray-600 mt-2 line-clamp-2">
          {product.description}
        </p>

        <p className="text-xl font-bold mt-3 text-green-600">
          ₹ {product.price}
        </p>

        <p className="mt-1 text-sm text-gray-500">
          {product.category}
        </p>

        {/* BUTTONS */}

        <div className="flex flex-wrap gap-2 mt-5">

          {/* DETAILS */}

          <Link
            to={`/product/${product._id}`}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Details
          </Link>

          {/* ADD TO CART */}

          <button
            onClick={() =>
              dispatch(addToCart(product))
            }
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Add To Cart
          </button>

          {/* EDIT */}

          <Link
            to={`/edit-product/${product._id}`}
            className="bg-yellow-500 text-white px-4 py-2 rounded"
          >
            Edit
          </Link>

          {/* DELETE */}

          <button
            onClick={deleteHandler}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
};

export default ProductCard;