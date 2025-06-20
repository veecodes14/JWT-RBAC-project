require("dotenv").config();
const express = require("express");
const dbConnect = require("./config/dbConnect");
const authRoutes = require("./routes/authRoutes");
const userRoutes= require("./routes/userRoutes");

dbConnect();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes)

app.get("/hello", (req, res) => {
    res.send ("hi")
})

// Start server
const PORT = process.env.PORT || 7002
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});

