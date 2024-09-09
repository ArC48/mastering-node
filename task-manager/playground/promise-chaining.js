require("../src/db/mongoose");
const User = require("../src/models/user");

// 66d95e312836ef2d70237a77

User.findByIdAndUpdate("66d99d230e7f75318de71cfd", { age: 10 })
    .then((user) => {
        console.log(user);

        return User.countDocuments({ age: 10 });
    })
    .then((userCounts) => {
        console.log("Users with age 10: " + userCounts);
    })
    .catch((e) => {
        console.log(e);
    });
