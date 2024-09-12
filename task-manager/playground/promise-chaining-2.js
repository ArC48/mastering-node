require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndDelete("66d9671a1a43bbc7d9056070")
//     .then((task) => {
//         return Task.countDocuments({ completed: false });
//     })
//     .then((countOfIncomplete) => {
//         console.log(countOfIncomplete + " tasks are left to be done!");
//     })
//     .catch((e) => {
//         console.log(e);
//     });

const findAndDeleteTask = async (id) => {
    // find and delete a task with model method
    const task = await Task.findByIdAndDelete(id);
    const countIncompletes = await Task.countDocuments({ completed: false });
    return countIncompletes;
};

findAndDeleteTask("66d9670aefd002c415ecdd7d")
    .then((result) => {
        console.log(`There are ${result} tasks left to do`);
    })
    .catch((e) => {
        console.log("Error: " + e);
    });
