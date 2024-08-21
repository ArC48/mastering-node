const express = require("express");

const app = express();

app.get("", (req, res) => {
    res.send("<h1>Hello express!</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>This is about page</h1>");
});

app.get("/weather", (req, res) => {
    res.send("<h1>This is weather page</h1>");
});

app.listen(3000, () => {
    console.log("App is running!");
});
