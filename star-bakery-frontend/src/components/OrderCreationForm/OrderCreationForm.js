import React, { useState } from "react";
import { createOrder } from "../../services/api";
import "./OrderCreationForm.css";

function OrderCreationForm() {
  const initialOrderData = {
    itemType: "Cake",
    orderState: "Created",
    branch: "",
    customer: "",
  };

  const [orderData, setOrderData] = useState(initialOrderData);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderData({
      ...orderData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await createOrder(orderData);
      console.log("Order created:", response);
      setOrderData(initialOrderData);
    } catch (error) {
      console.error("Error creating order:", error);
      setError("Error creating the order. Please try again.");
    }
  };

  return (
    <div>
      <h2>Create an Order</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Item Type: </label>
          <select
            name="itemType"
            value={orderData.itemType}
            onChange={handleChange}
          >
            <option value="Cake">Cake</option>
            <option value="Cookies">Cookies</option>
            <option value="Muffins">Muffins</option>
          </select>
        </div>
        <div>
          <label>Order Status: </label>
          <select
            name="orderState"
            value={orderData.orderState}
            onChange={handleChange}
          >
            <option value="Created">Created</option>
            <option value="Shipped">Shipped</option>
            <option value="Delivered">Delivered</option>
            <option value="Canceled">Canceled</option>
          </select>
        </div>
        <div>
          <label>Branch: </label>
          <input
            type="text"
            name="branch"
            value={orderData.branch}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Customer: </label>
          <input
            type="text"
            name="customer"
            value={orderData.customer}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Create Order</button>
      </form>
    </div>
  );
}

export default OrderCreationForm;
