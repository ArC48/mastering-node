const request = require("request");

const geocode = (address, callback) => {
    const url = `https://api.positionstack.com/v1/forward?access_key=2382a75fc6e3b1b228998848403e7a4c&query=${encodeURIComponent(
        address
    )}`;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback("Unable to connect to location services", undefined);
        } else if (body.data.length === 0) {
            callback("Unable to find location, Try another one!", undefined);
        } else {
            const { latitude, longitude, name: location } = body.data[0];

            callback(undefined, {
                latitude,
                longitude,
                location,
            });
        }
    });
};

module.exports = geocode;
