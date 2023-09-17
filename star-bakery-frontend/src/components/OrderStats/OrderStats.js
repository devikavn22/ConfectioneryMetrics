import React, { useState, useEffect } from "react";
import TimeSelector from "./../TimeSelector/TimeSelector";
import axios from "axios";
import { Pie } from "react-chartjs-2";

import "./OrderStats.css";

const API_BASE_URL = "http://localhost:3008/api";

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    position: "right",
  },
};

const chartStyles = {
  width: "80%",
  margin: "auto",
};

function OrderStats() {
  const [allOrders, setAllOrders] = useState([]);
  const [timeRange, setTimeRange] = useState({ startTime: "", endTime: "" });
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    fetchData();
  }, [timeRange]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/orders`);
      setAllOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    // Filter orders based on the selected time range
    const filtered = allOrders.filter((order) => {
      const orderTime = new Date(order.lastUpdateTime).getTime();
      const startTime = new Date(timeRange.startTime).getTime();
      const endTime = new Date(timeRange.endTime).getTime();
      return orderTime >= startTime && orderTime <= endTime;
    });
    setFilteredOrders(filtered);
  }, [allOrders, timeRange]);

  useEffect(() => {
    // Calculate the count of orders per branch in the filtered orders
    const branchCounts = {};
    filteredOrders.forEach((order) => {
      const { branch } = order;
      if (branchCounts[branch]) {
        branchCounts[branch]++;
      } else {
        branchCounts[branch] = 1;
      }
    });

    //  data for the Pie Chart
    const labels = Object.keys(branchCounts);
    const data = Object.values(branchCounts);

    setChartData({
      labels,
      datasets: [
        {
          data,
          backgroundColor: [
            "red",
            "blue",
            "green",
            "yellow",
            "orange",
            "purple",
          ],
        },
      ],
    });
  }, [filteredOrders]);

  const handleTimeRangeChange = (selectedTimeRange) => {
    setTimeRange(selectedTimeRange);
  };

  return (
    <div className="order-stats">
      <h1>Order Statistics</h1>
      <TimeSelector onTimeRangeChange={handleTimeRangeChange} />
      <div style={chartStyles}>
        {chartData.labels && chartData.labels.length > 0 ? (
          <Pie data={chartData} options={chartOptions} />
        ) : (
          <p className="no-data">
            No data to display . Please select the time range you want to check
            the online orders. Also, please specify both ranges so that we fetch
            the exact matched orders......
          </p>
        )}
      </div>
    </div>
  );
}

export default OrderStats;
