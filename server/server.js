const express = require("express");
const app = express();
require("dotenv").config();
const morgan = require("morgan")
const appRouter = require("./routes/index")
const db = require("./config/db")
const PORT = process.env.PORT || 5000

// middleware
app.use(express.json());

// remove in production
app.use(morgan("dev"));
app.use("/api/v1", appRouter)


db.connect();

app.listen(PORT, () => {
    console.log("Server Open");
})