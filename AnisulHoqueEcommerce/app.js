const express = require("express");

const app = express();
var createError = require("http-errors");
const rateLimit = require("express-rate-limit");
const productRouter = require("./routers/productsRouter");
const { seedRouter } = require("./router/seedRouter");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  message: "Too Many Requests" // Disable the `X-RateLimit-*` headers
});
const isLoggedIn = (req, res, next) => {
  const login = true;
  if (login) {
    req.body.id = 12;
    console.log(req);
    next();
  } else {
    return res.status(401).send("un auyorized user");
  }
};
app.use(limiter);
app.use("/product", productRouter);

app.use((req, res, next) => {
  createError(404, "router not found");
  next();
});
app.use("/api/seed", seedRouter);
// app.use((err, req, res, next) => {
//   createError(404);
// });d
// app.get("/products", limiter, (req, res) => {
//   console.log(req.body.id);
//   res.status(200).send({ message: "Products are Returned" });
// });
app.get("/", (req, res) => {
  res.send("Welcome To Server");
});
app.get("/test", (req, res) => {
  res.send("Api Working Fine");
});
app.post("/test", (req, res) => {
  res.send("Api Post Working Fine");
});
app.put("/test", (req, res) => {
  res.send("Api Put Working Fine");
});
app.delete("/test", (req, res) => {
  res.send("Api Delelte Working Fine");
});

module.exports = app;
