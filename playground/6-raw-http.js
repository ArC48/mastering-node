const http = require("http");

const url = `http://api.positionstack.com/v1/forward?access_key=2382a75fc6e3b1b228998848403e7a4c&query=Tbilisi}`;

const request = http.request(url, (response) => {
    let data = "";

    response.on("data", (chunk) => {
        data += chunk.toString();
    });

    response.on("end", () => {
        const body = JSON.parse(data);
        console.log(body.data[0]);
    });
});

request.on("error", (err) => {
    console.log("Error:", err);
});
request.end();
