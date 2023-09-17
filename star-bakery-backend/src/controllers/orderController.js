const Order = require("../models/Order");

// GET Request: Get order by Order ID
exports.getOrderById = async (req, res) => {
  try {
    const { orderid } = req.params;
    const order = await Order.findById(orderid);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    return res.status(200).json(order);
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

// POST Request: Create a new order
exports.createOrder = async (req, res) => {
  try {
    const { itemType, orderState, branch, customer } = req.body;
    const order = new Order({ itemType, orderState, branch, customer });
    await order.save();
    return res
      .status(201)
      .json({ message: "Order created successfully", orderId: order._id });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

// GET Request: Get all orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    if (!orders || orders.length === 0) {
      return res.status(404).json({ message: "No orders found" });
    }
    return res.status(200).json(orders);
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

exports.getOrdersByTimeRange = async (req, res) => {
  try {
    const { startTime, endTime } = req.query;

    // Check if startTime and endTime are provided
    if (!startTime || !endTime) {
      return res
        .status(400)
        .json({ message: "Both startTime and endTime are required." });
    }

    // Parse startTime and endTime as dates
    const start = new Date(decodeURIComponent(startTime));
    const end = new Date(decodeURIComponent(endTime));

    // Find orders with lastUpdateTime within the specified range
    const orders = await Order.find({
      lastUpdateTime: { $gte: start, $lte: end },
    });

    res.json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
