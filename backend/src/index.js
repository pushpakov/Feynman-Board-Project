const express = require("express");
const bodyParser = require("body-parser");
const route = require("./routes/route.js");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors")
require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());

mongoose.set('strictQuery', false);
mongoose.connect(`mongodb+srv://pushpak:${process.env.cluster_Password}@radoncluster.opqe2.mongodb.net/${process.env.cluster_Name}?retryWrites=true&w=majority`, {
    useNewUrlParser: true
})
    .then(() => console.log("Database connected..."))
    .catch(err => console.log(err))

app.use("/", route);

app.listen(process.env.PORT, function () {
    console.log(`Server running on port ${process.env.PORT}`);
  });


