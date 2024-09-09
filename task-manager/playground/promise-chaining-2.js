require("../src/db/mongoose");
const Task = require("../src/models/task");

Task.findByIdAndDelete("66d9671a1a43bbc7d9056070")
    .then((task) => {
        return Task.countDocuments({ completed: false });
    })
    .then((countOfIncomplete) => {
        console.log(countOfIncomplete + " tasks are left to be done!");
    });
