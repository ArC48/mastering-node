const path = require("path");
const express = require("express");

const app = express();
const publicDirectory = path.join(__dirname, "..\\public");

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../views"));
app.use(express.static(publicDirectory));

app.get("", (req, res) => {
    res.render("index", {
        title: "Weather Corner",
        name: "Archmage Ged",
    });
});

app.get("/about", (req, res) => {
    res.render("about");
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
