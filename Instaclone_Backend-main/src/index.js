const express = require("express")//
// const mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost/InstaClone")   // DATABASE : USERDB / collection : users
const app = express();//
//body parser
const bodyparser = require("body-parser");//
app.use(bodyparser.json())//
const InstapostRoute = require('./routes/postR')


app.use("/getpost",InstapostRoute)
app.use("*", (req, res) => {
    res.status(404).send("404 not found");
});
app.listen(4000, () => console.log("server ste=art at 4000"))