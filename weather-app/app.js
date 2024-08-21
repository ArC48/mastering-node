const request = require("request");
const chalk = require("chalk");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const place = process.argv[2];
if (!place) {
    console.log("Please Provide a place!");
} else {
    geocode(place, (error, { latitude, longitude, location }) => {
        if (error) {
            return "Error:" + error;
        }

        forecast(latitude, longitude, "m", (error, forecastData) => {
            if (error) {
                console.log("Error", error);
            } else {
                console.log("Data", forecastData);
            }
        });
    });
}
