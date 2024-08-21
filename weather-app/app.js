const request = require("request");
const chalk = require("chalk");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const place = process.argv[2];
if (!place) {
    console.log("Please Provide a place!");
} else {
    geocode(place, (error, geoData) => {
        if (error) {
            return "Error:" + error;
        }

        const { latitude, longitude } = geoData;
        forecast(latitude, longitude, "m", (error, forecastData) => {
            if (error) {
                console.log("Error", error);
            } else {
                console.log("Data", forecastData);
            }
        });
    });
}
