// CRUD create read update delete

const { MongoClient, ObjectId } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

const id = new ObjectId();
console.log(id.toHexString());

// connect node to database
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log("Unable to connect to database!");
    }

    const db = client.db(databaseName);

    // insert a single object

    // db.collection("users").insertOne(
    //     {
    //         _id: id,
    //         name: "Dracula",
    //         age: 250,
    //     },
    //     (err, result) => {
    //         if (err) {
    //             return console.log("Unable to insert user :(");
    //         }

    //         console.log(result.insertedId);
    //     }
    // );

    // insert multiple objects

    // db.collection("users").insertMany(
    //     [
    //         {
    //             name: "Jay",
    //             age: 25,
    //         },
    //         {
    //             name: "Luka",
    //             age: 24,
    //         },
    //     ],
    //     (err, result) => {
    //         if (err) {
    //             return console.log("Unable to insert documents :(");
    //         }

    //         console.log(result.insertedIds);
    //     }
    // );

    // db.collection("tasks").insertMany(
    //     [
    //         {
    //             _id: 123,
    //             description: "Fuck some bitches",
    //             completed: false,
    //         },
    //         {
    //             description: "Watch the movie",
    //             completed: true,
    //         },
    //         {
    //             description: "make your bed",
    //             completed: false,
    //         },
    //     ],
    //     (err, result) => {
    //         if (err) {
    //             return console.log("Could'nt insert the data :(");
    //         }

    //         console.log(result.insertedCount);
    //     }
    // );
});
