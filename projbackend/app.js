const mongoose = require('mongoose');
const express = require("express");
const app = express();


mongoose.connect('mongodb://localhost:27017/test',
 {useNewUrlParser: true});

 const port  = 8000;

 app.listen(port, () => {
     console.log(`app is runninng at ${port}`);
 });
