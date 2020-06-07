const express = require("express");

const app = express();

const port = 8000;

const admin = (req,res) => {
    return res.send("Home page")
};


app.get("/signup",(req,res) => {
    return res.send("user signed up!");
});

const isAdmin = (req,res,next) => {
    console.log("isAdmin is running");
    next();
}

const isloggedIn = (req,res,next) => {
    console.log("isloggedin is running");
    next();
}

app.get("/admin",isloggedIn, isAdmin,admin);

app.get("/login",(req,res) => {
    return res.send("you are visiting login route!");
});

app.get("/",(req,res) => {
    return res.send("home page");
});

app.listen(port,() => {
    console.log("server is up and coming!");
});


// const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))