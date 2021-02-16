const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./utilities/database")
const fixedCosts = require("./routes/fixedCosts");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

/*enable when create new tables*/
//sequelize.sync()

/*routes*/
app.use("/fixed-costs", fixedCosts);

/******/

app.listen(4000);
