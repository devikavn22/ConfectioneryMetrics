const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  itemType: { type: String, enum: ["Cake", "Cookies", "Muffins"] },
  orderState: {
    type: String,
    enum: ["Created", "Shipped", "Delivered", "Canceled"],
  },
  lastUpdateTime: { type: Date, default: Date.now },
  branch: { type: Number, required: true },
  customer: { type: String, required: true },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
