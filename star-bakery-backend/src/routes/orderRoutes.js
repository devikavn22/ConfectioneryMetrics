const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

// Get order by ID
router.get("/order/:orderid", orderController.getOrderById);

// Create a new order
router.post("/order/", orderController.createOrder);

// GET all orders
router.get("/orders", orderController.getAllOrders);

// All Orders for a Time Range
router.get("/orders", orderController.getOrdersByTimeRange);

module.exports = router;
