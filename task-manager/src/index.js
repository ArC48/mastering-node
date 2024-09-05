// (initialize express server)

const express = require("express");

// Establish connection to the database (mongoose handles the connection)
require("./db/mongoose");

// models
const User = require("./models/user");
const Task = require("./models/task");

// Create an Express application instance
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse incoming JSON requests into JavaScript objects
app.use(express.json());

// POST request handler for creating new users
app.post("/users", (req, res) => {
    // Create a new user using the data from the request body
    const user = new User(req.body);
    user.save()
        .then(() => {
            // we can chain result methods and send custom status
            res.status(201).send(`${user.name} added!`);
        })
        .catch((e) => {
            res.status(400).send(e);
        });
});

// POST request handler for creating new tasks
app.post("/tasks", (req, res) => {
    const task = new Task(req.body);
    task.save()
        .then(() => {
            res.status(201).send(`Task {${task.title}} added!`);
        })
        .catch((e) => {
            res.status(400).send(e);
        });
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log("Listening on Port: " + port);
});
