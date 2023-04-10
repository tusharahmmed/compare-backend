const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

const PORT = process.env.PORT || 5000;
const app = express();

// use middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app routes

const mongoDb_URI =
  "mongodb+srv://mydbuser1:ZcM2TPI3m8l3VcmY@cluster0.a7zq8.mongodb.net/parcel_compare?retryWrites=true&w=majority";

// import routes
const providerRoutes = require("./routes/providerRoute");
const dollarRoutes = require("./routes/dollerRoute");
const costRoutes = require("./routes/costRoute");
const dhlZoneRoutes = require("./routes/dhlZoneRoute");
const fedexZoneRoutes = require("./routes/fedexZoneRoute");
const rateRoutes = require('./routes/rateRoute');

// use app routes
app.use("/providers", providerRoutes);
app.use("/dollar-rate",dollarRoutes);
app.use("/costs",costRoutes);
app.use("/zone/dhl",dhlZoneRoutes);
app.use("/zone/fedex",fedexZoneRoutes);
app.use('/rates',rateRoutes)

app.get("/", (req, res) => {
  res.send("<h1>Server is running</h1>");
});

// connect mongoose
mongoose.set("strictQuery", false);
mongoose
  .connect(mongoDb_URI)
  .then(() => {
    // if connect db successfully
    app.listen(PORT, () => {
      console.log(`Server is runnig port: ${PORT}`);
    });
  })
  .catch((error) => {
    // if connect db rejected
    console.log(error);
  });
