require('dotenv').config();

const mongoose = require('mongoose');
const express = require("express");
const app = express();
const bodyParser =  require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");



const authRoutes = require("./routes/auth"); 


//DB connection
mongoose.connect(process.env.DATABASE,
 {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log("DB CONNECTED");
});

//My routes
app.use("/api", authRoutes);


//Middle wares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

 
//port
const port  = process.env.PORT || 8000;


//starting a server
app.listen(port, () => {
     console.log(`app is runninng at ${port}`);
 });
