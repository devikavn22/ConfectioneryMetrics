import axios from "axios";

const API_BASE_URL = "http://localhost:3008/api";

export const fetchOrder = async (orderId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/order/${orderId}`);
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error fetching order:", error);
    throw error;
  }
};

export const createOrder = async (orderData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/order`, orderData);
    return response.data;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
};

export const fetchAllOrders = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/orders`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error fetching order:", error);
    throw error;
  }
};

