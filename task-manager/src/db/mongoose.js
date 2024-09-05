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
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 7,
        validate(value) {
            if (value.toLowerCase().includes("password")) {
                throw new Error("password is too weak!");
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

// const user1 = new User({
//     name: "James",
//     email: "james112@eMail.com",
//     password: "jamesPass123",
//     age: 26,
//     sex: "Male",
// });

// user1
//     .save()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

const Task = mongoose.model("Task", {
    title: {
        type: String,
        required: true,
        trim: true,
    },
    completed: {
        type: Boolean,
        required: false,
        default: false,
    },
});

const task1 = new Task({
    title: "     learn shmode.js     ",
    completed: true,
});

task1
    .save()
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    });
