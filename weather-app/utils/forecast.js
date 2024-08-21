const request = require("request");
const chalk = require("chalk");

const forecast = (altitude, longitude, unit, callback) => {
    const URL = `https://api.weatherstack.com/current?access_key=f7c95d6e7846da957d58e2daba49b0fc&query=${altitude},${longitude}&units=${unit}`;

    request({ url: URL, json: true }, (error, response) => {
        const body = response.body;
        if (error) {
            callback("Unable to connect to weather service!", undefined);
        } else if (body.error) {
            callback(chalk.bgRed(body.error.info), undefined);
        } else {
            const currentTemperature = body.current.temperature;
            const feelsLike = body.current.feelslike;
            const system = URL[URL.length - 1] == "f" ? "farenheit" : "celsius";
            callback(
                undefined,
                chalk.bgGreen(
                    `${body.current.weather_descriptions[0]}: It's ${currentTemperature} degrees ${system} outside but it feels like ${feelsLike} degrees ${system} in ${body.location.name}`
                )
            );
        }
    });
};

module.exports = forecast;
