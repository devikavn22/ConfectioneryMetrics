const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3008;
const db = require("./config/db");

// Middleware
app.use(express.json());
app.use(cors()); // To Enable CORS for all routes

// Routes
const orderRoutes = require("./routes/orderRoutes");
app.use("/api", orderRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
