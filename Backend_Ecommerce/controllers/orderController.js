import Order from "../models/order.js";

export const createOrder = async (req, res) => {
  try {
    const order = await Order.create({
      user: req.user.id,
      products: req.body.products,
      totalPrice: req.body.totalPrice,
    });

    res.json(order);
  } catch (error) {
    res.json({
      error: error.message,
    });
  }
};

export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();

    res.json(orders);
  } catch (error) {
    res.json({
      error: error.message,
    });
  }
};