const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const fixedCosts = require("./routes/variableCosts");
const recipes = require("./routes/recipes")
const dbAdmin = require("./routes/dbAdmin");

const {
  cors: { corsOrigin },
} = require("./utilities/secrets.json");

const app = express();

app.use(
  cors({
    origin: corsOrigin,
    optionsSuccessStatus: 200,
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*routes*/
app.use("/variable-costs", fixedCosts);
app.use("/recipes", recipes)
app.use("/db-admin", dbAdmin);

/******/

app.listen(4000);
