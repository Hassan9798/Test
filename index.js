const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const port = process.env.PORT || 4000;
const convertCurrencyRotutes = require('./routes/convertCurrency');

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// SETTING UP CORS
app.use(cors({ origin: "*" }));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});


dotenv.config(); // to read .env file
//routes
app.use("/api", convertCurrencyRotutes);

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});
