const fs = require("fs");

// task

const dataBuffer = fs.readFileSync("1-json.json");
const dataString = dataBuffer.toString();
const dataJSON = JSON.parse(dataString);
dataJSON.name = "beqa";
dataJSON.planet = "Mars";
dataJSON.age = 23;
const stringData = JSON.stringify(dataJSON);
fs.writeFileSync("1-json.json", stringData);
