const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
    useNewUrlParser: true,
});

const User = mongoose.model("User", {
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("enter valid email!");
            }
        },
    },
    age: {
        type: Number,
        required: true,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error("You cant be negative years old");
            }
        },
    },
    sex: {
        default: "N/A",
        type: String,
    },
});

const user1 = new User({
    name: "lasha",
    // age: 26,
    sex: "Male",
    email: "LAsha98@eMail.com",
});

user1
    .save()
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });

// const Task = mongoose.model("Task", {
//     title: {
//         type: String,
//     },
//     completed: {
//         type: Boolean,
//     },
// });

// const task1 = new Task({
//     title: "learn mongoose",
//     completed: false,
// });

// task1
//     .save()
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
