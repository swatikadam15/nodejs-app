const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to Home Page");
});

app.get("/users", (req, res) => {
    res.send("Users Page");
});

app.get("/products", (req, res) => {
    res.send("Products Page");
});

app.get("/orders", (req, res) => {
    res.send("Orders Page");
});

app.listen(3000, () => {
    console.log("Application running on port 3000");
});