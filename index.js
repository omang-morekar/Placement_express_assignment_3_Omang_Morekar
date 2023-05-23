const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const { connectDB } = require("./config/db");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const { router } = require("./routes/blogRoutes");

dotenv.config();

connectDB();

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use("/blog", router);

app.get("/", (req, res) => {
  res.send({
    message: "Hello World🌍",
  });
});

app.use(notFound);
app.use(errorHandler);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
