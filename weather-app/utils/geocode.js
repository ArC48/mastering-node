const request = require("request");

const geocode = (address, callback) => {
    const url = `https://api.positionstack.com/v1/forward?access_key=2382a75fc6e3b1b228998848403e7a4c&query=${encodeURIComponent(
        address
    )}`;

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback("Unable to connect to location services", undefined);
        } else if (response.body.data.length === 0) {
            callback("Unable to find location, Try another one!", undefined);
        } else {
            const data = response.body.data[0];
            callback(undefined, {
                latitude: data.latitude,
                longitude: data.longitude,
                location: data.name,
            });
        }
    });
};

module.exports = geocode;
