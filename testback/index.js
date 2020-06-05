const express = require("express");

const app = express();

const port = 8000;


app.get("/signout",(req,res) => {
    return res.send("user signed out");
});

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