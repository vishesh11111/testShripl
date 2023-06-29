
const express = require("express");
const app = express();
const port = 4000;
const Routes = require("./src/routes/routes");
const connect = require("./src/configs/db");

app.use("/api", Routes);

app.listen(port, async () => {
    try {
        await connect();
        console.log(`port running on ${port}`)
    } catch (error) {
        console.log(error)
    }
})