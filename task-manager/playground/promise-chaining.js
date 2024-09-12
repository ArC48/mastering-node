require("../src/db/mongoose");
const User = require("../src/models/user");

// 66d95e312836ef2d70237a77

// User.findByIdAndUpdate("66d99d230e7f75318de71cfd", { age: 12 })
//     .then((user) => {
//         console.log(user);

//         return User.countDocuments({ age: 12 });
//     })
//     .then((userCounts) => {
//         console.log("Users with age 10: " + userCounts);
//     })
//     .catch((e) => {
//         console.log(e);
//     });

const updateAgeAndCount = async (id, updatedAge) => {
    const result = await User.findByIdAndUpdate(id, { age: updatedAge });
    const count = await User.countDocuments({ age: updatedAge });
    return count;
};

updateAgeAndCount("66d99d230e7f75318de71cfd", 90)
    .then((count) => {
        console.log(count);
    })
    .catch((e) => {
        console.log(e);
    });
