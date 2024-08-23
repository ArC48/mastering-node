const path = require("path");
const express = require("express");
const hbs = require("hbs");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

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
        name: "Beqa",
    });
});

app.get("/help", (req, res) => {
    res.render("help", {
        title: "Get Help!",
        buttonText: "Send Feedback",
        name: "Beqa",
    });
});

app.get("/weather", (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: "You must provide an address term",
        });
    }

    geocode(
        req.query.address,
        (error, { latitude, longitude, address } = {}) => {
            if (error) {
                return res.send({
                    error,
                });
            }
            forecast(latitude, longitude, "m", (error, forecastData) => {
                if (error) {
                    return res.send({
                        error,
                    });
                }
                console.log(forecastData);

                res.send({
                    forecast: forecastData,
                    location: req.query.address,
                });
            });
        }
    );
});

app.get("/products", (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: "You must provide a search term",
        });
    }

    res.send({
        products: [],
    });
});

// app.get("/help/*", (req, res) => {
//     res.render("404", {
//         title: "Help article not Found",
//         name: "Beqa",
//     });
// });

app.get("*", (req, res) => {
    res.render("404", {
        title: "Page not Found",
        name: "Beqa",
    });
});

app.listen(3000, () => {
    console.log("App is running!");
});
