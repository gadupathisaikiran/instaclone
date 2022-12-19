const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/route");
require('dotenv').config();
const app = express();
app.use(express.json());
app.use('/', router);

const uri = process.env.MONGODB_URI;

mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("CONNECTED TO DATABASE");
    })
    .catch((e) => { 
        console.log(e); 
    });

app.listen(5000, () => { console.log(`Server is up and running at port 5000`); })
