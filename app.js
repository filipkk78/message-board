const express = require("express");
const app = express();
const newRouter = require("./routes/newRouter");
const indexRouter = require("./routes/indexRouter");

app.use("/new", newRouter);
app.use("/", indexRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Message board running on port ${PORT}`);
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});
