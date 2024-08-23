const request = require("request");
const chalk = require("chalk");

const forecast = (altitude, longitude, unit, callback) => {
    const url = `https://api.weatherstack.com/current?access_key=f7c95d6e7846da957d58e2daba49b0fc&query=${altitude},${longitude}&units=${unit}`;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback("Unable to connect to weather service!", undefined);
        } else if (body.error) {
            callback(chalk.bgRed(body.error.info), undefined);
        } else {
            const { temperature: currentTemperature, feelslike: feelsLike } =
                body.current;
            const system = URL[URL.length - 1] == "f" ? "farenheit" : "celsius";
            callback(undefined, body.current);
        }
    });
};

module.exports = forecast;
