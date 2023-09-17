import React, { useState, useEffect } from "react";
import { BarElement } from "chart.js";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import { fetchAllOrders } from "../../services/api";

ChartJS.register(CategoryScale);
ChartJS.register(BarElement);

const BarChart = ({ timeRange }) => {
  const [chartData, setChartData] = useState({ labels: [], data: [] });

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const orders = await fetchAllOrders();
        const branchCounts = calculateBranchCounts(orders);
        setChartData(branchCounts);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    fetchOrders();
  }, []);

  const calculateBranchCounts = (orders) => {
    const branchCounts = {
      labels: [],
      data: [],
    };

    // Create a map to store branch counts for different order states
    const branchCountMap = new Map();

    for (const order of orders) {
      const { branch, orderState } = order;

      // Increment the count for the branch and orderState combination
      const key = `${branch}_${orderState}`;
      branchCountMap.set(key, (branchCountMap.get(key) || 0) + 1);

      // Add branch to labels if it's not already included
      if (!branchCounts.labels.includes(branch.toString())) {
        branchCounts.labels.push(branch.toString());
      }
    }

    // Extract branch counts from the map
    for (const label of branchCounts.labels) {
      const shippedCount = branchCountMap.get(`${label}_Shipped`) || 0;
      const deliveredCount = branchCountMap.get(`${label}_Delivered`) || 0;
      const createdCount = branchCountMap.get(`${label}_Created`) || 0;
      const canceledCount = branchCountMap.get(`${label}_Canceled`) || 0;
      branchCounts.data.push({
        label: label,
        shipped: shippedCount,
        delivered: deliveredCount,
        created: createdCount,
        canceled: canceledCount,
      });
    }

    return branchCounts;
  };

  const data = {
    labels: chartData.labels,
    datasets: [
      {
        label: "Shipped",
        data: chartData.data.map((item) => item.shipped),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Delivered",
        data: chartData.data.map((item) => item.delivered),
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Created",
        data: chartData.data.map((item) => item.created),
        backgroundColor: "rgba(255, 206, 86, 0.2)",
        borderColor: "rgba(255, 206, 86, 1)",
        borderWidth: 1,
      },
      {
        label: "Canceled",
        data: chartData.data.map((item) => item.canceled),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        type: "linear",
        position: "bottom",
        title: {
          display: true,
          text: "Branch",
        },
      },
      y: {
        type: "linear",
        position: "bottom",
        title: {
          display: true,
          text: "No of orders",
        },
      },
    },
    legend: {
      labels: {
        fontSize: 25,
      },
    },
  };

  return (
    <div>
      <Bar data={data} height={500} options={options} />
    </div>
  );
};

export default BarChart;
