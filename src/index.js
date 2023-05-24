const express = require("express");
const morgan = require("morgan");
const routes = require("../routes/system.routes");
const cors = require("cors");


const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(routes);


app.use((err, req, res, next) => {
    return res.json({
        message: err.message
    })
});

app.listen(3000);
console.log("Listen on port 3000");
