
import { useSelector } from "react-redux";

import Navbar from "../components/Navbar";

const Cart = () => {
  const { cartItems } = useSelector(
    (state) => state.cart
  );

  return (
    <div>
      <Navbar />

      <div className="p-6">
        <h1 className="text-4xl font-bold mb-6">
          Cart Items
        </h1>

        <div className="space-y-5">
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex items-center gap-5 shadow-lg p-4 rounded-lg"
            >
              <img
                src={item.image}
                className="w-24 h-24 object-cover rounded-lg"
              />

              <div>
                <h2 className="text-xl font-bold">
                  {item.name}
                </h2>

                <p className="text-gray-600">
                  ₹{item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;