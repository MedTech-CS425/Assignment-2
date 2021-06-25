const express = require('express');
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Assignment2', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());

app.use(express.json());





app.use("/", require("./routes/userRoute"));

app.use("/", require("./routes/categoryRoute"));

app.use("/", require("./routes/itemRoute"));

app.use("/", require("./routes/listRoute"));






app.listen(3001, () => {

    console.log(" we are connected");
})