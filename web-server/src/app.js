const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

// Paths for views and partials
const publicDirectory = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../views");
const partialsPath = path.join(__dirname, "../views/partials");

// setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);

// Register partials
hbs.registerPartials(partialsPath);

// setup static directory to serve
app.use(express.static(publicDirectory));

app.get("", (req, res) => {
    res.render("index", {
        title: "Weather Corner",
        name: "Archmage Ged",
    });
});

app.get("/about", (req, res) => {
    res.render("about", {
        title: "about page",
    });
});

app.get("/help", (req, res) => {
    res.render("help", {
        title: "Get Help!",
        buttonText: "Send Feedback",
    });
});

app.get("/weather", (req, res) => {
    res.send([
        {
            forecast: "23 degrees celsius",
            location: "Georgia",
        },
        {
            forecast: "2 degrees celsius",
            location: "Alaska",
        },
    ]);
});

app.listen(3000, () => {
    console.log("App is running!");
});
