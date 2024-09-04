// CRUD create read update delete

const { MongoClient, ObjectId } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

// const id = new ObjectId();
// console.log(id.toHexString());

// connect node to database
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log("Unable to connect to database!");
    }

    const db = client.db(databaseName);

    // db.collection("users")
    //     .findOneAndUpdate(
    //         {
    //             _id: new ObjectId("66d802e15a17014a806f36a8"),
    //         },
    //         {
    //             $inc: {
    //                 age: 1,
    //             },
    //         }
    //     )
    //     .then((result) => {
    //         console.log(result);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });

    // db.collection("users").findOne(
    //     { _id: new ObjectId("66cdce6a507d56a524d7dbc8") },
    //     (err, user) => {
    //         if (err) {
    //             return console.log("Unable to fetch :(");
    //         }
    //         console.log(user);
    //     }
    // );

    // get the array of objects => toArray()
    // db.collection("tasks")
    //     .find({})
    //     .toArray((err, tasks) => {
    //         console.log(tasks);
    //     });

    //  get the number of objects in a database => count()
    // db.collection("tasks")
    //     .find({})
    //     .count((err, count) => {
    //         console.log(count);
    //     });

    // db.collection("tasks").findOne(
    //     {
    //         _id: new ObjectId("66cdc6d571255bea5fe45dce"),
    //     },
    //     (err, task) => {
    //         if (err) {
    //             return console.log("Unable to get the task :(");
    //         }
    //         console.log(task);
    //     }
    // );

    db.collection("tasks")
        .deleteMany({
            completed: false,
        })
        .then((result) => {
            console.log(result);
        })
        .catch((err) => {
            console.log(err);
        });

    db.collection("tasks")
        .deleteOne({
            description: "Fuck some bitches",
        })
        .then((result) => {
            console.log(result);
        })
        .catch((err) => {
            console.log(err);
        });
});
