const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const sequelize = require("./utilities/database");
const fixedCosts = require("./routes/fixedCosts");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);

app.use(bodyParser.urlencoded({ extended: true }));

/*enable when create new tables*/
//sequelize.sync()

/*routes*/
app.use("/fixed-costs", fixedCosts);

/******/

app.listen(4000);
