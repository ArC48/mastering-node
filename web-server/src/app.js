const path = require("path");
const express = require("express");

const app = express();
const publicDirectory = path.join(__dirname, "..\\public");

app.use(express.static(publicDirectory));

app.get("/weather", (req, res) => {
    res.send([
        {
            forecast: "23 degrees celsius",
            location: "Georgia",
        },
        {
            forecast: "2 degrees celsius",
            location: "Alaska",
        },
    ]);
});

app.listen(3000, () => {
    console.log("App is running!");
});
