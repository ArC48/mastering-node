const request = require("request");
const chalk = require("chalk");
const geocode = require("./utils/geocode");

// Weather API Call

// const URL =
//     "https://api.weatherstack.com/current?access_key=f7c95d6e7846da957d58e2daba49b0fc&query=37.8267,-122.4233&units=f";

// request({ url: URL, json: true }, (error, response) => {
//     const body = response.body;
//     if (error) {
//         console.log("Unable to connect to weather service!");
//     } else if (body.error) {
//         console.log(chalk.bgRed(body.error.info));
//     } else {
//         const currentTemperature = body.current.temperature;
//         const feelsLike = body.current.feelslike;
//         const system = URL[URL.length - 1] == "f" ? "farenheit" : "celsius";
//         console.log(
//             chalk.bgGreen(
//                 `${body.current.weather_descriptions[0]}: It's ${currentTemperature} degrees ${system} outside but it feels like ${feelsLike} degrees ${system}`
//             )
//         );
//     }
// });

// Geocoding

// address -> Lat/Long -> Weather

// const geoURL =
//     "https://api.positionstack.com/v1/forward?access_key=2382a75fc6e3b1b228998848403e7a4c&query=Tbilisi";

// request({ url: geoURL, json: true }, (error, response) => {
//     if (error) {
//         console.log("Cant connect to the geopositional API");
//     } else if (response.body.error) {
//         const error = response.body.error;
//         console.log(chalk.bgRed(`Error: ${error.message}`));
//     } else {
//         const data = response.body.data[0];
//         console.log(
//             chalk.bgGreen(
//                 `Latitude: ${data.latitude}, Longitude: ${data.longitude}`
//             )
//         );
//     }
// });

geocode("Philadelphia", (error, data) => {
    console.log("Error", error);
    console.log("Data", data);
});

geocode("Tbilisi", (error, data) => {
    console.log("Error", error);
    console.log("Data", data);
});
