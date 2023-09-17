# NewRepo

# Star Bakery Full-Stack Dashboard App

Star Bakery Full-Stack Dashboard is a web application that provides insights and analytics for the Star Bakery's online business. It offers various widgets and charts to help the business analyst monitor and analyze the performance of the bakery's online orders.

## Features

- Time Selector Widget: Allows users to select a specific time range for data analysis.
- Bar Chart Widgets: Show order statistics divided by item type and order state.
- Displays the top-performing branches.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js: Make sure you have Node.js installed on your system.

## Getting Started

To run the Star Bakery Full-Stack Dashboard locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd bakery-dashboard

   ```

2. Install dependencies for both the frontend and backend:

   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install

   ```

3. Start the backend server:

   ```bash
   cd backend
   npm start

   The backend server will run on http://localhost:3008/api.
   ```

4. In a new terminal, start the frontend:

   ```bash
   cd frontend
   npm start

   The frontend will be available at http://localhost:3000.
   ```

5. Open your web browser and navigate to http://localhost:3000 to access the Star Bakery Dashboard.

## Configuration

Backend API URL: Make sure the Node.js backend is running on http://localhost:3008/api.

## Technologies Used

Frontend:

- React: A JavaScript library for building user interfaces.
- Chart.js and react-chartjs-2: A versatile charting library for React applications.
- Axios: A promise-based HTTP client for making API requests.
- Ant Design (antd): A comprehensive UI library for designing modern web applications.

Backend:

Node.js: A JavaScript runtime for building server-side applications.
Express: A web application framework for Node.js.
MongoDB: A NoSQL database for storing bakery data.
