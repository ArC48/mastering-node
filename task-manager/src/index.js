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

app.get("/users", (req, res) => {
    User.find({})
        .then((users) => {
            res.send(users);
        })
        .catch((e) => {
            res.status(500).send(e);
        });
});

app.get("/users/:id", (req, res) => {
    _id = req.params.id;

    User.findById(_id)
        .then((user) => {
            if (!user) {
                return res.status(404).send({ error: "User Not Found!" });
            }
            res.send(user);
        })
        .catch((e) => {
            res.status(500).send(e);
        });
});

app.get("/tasks", (req, res) => {
    Task.find({})
        .then((tasks) => {
            res.send(tasks);
        })
        .catch((e) => {
            res.status(500).send(e);
        });
});

app.get("/tasks/:id", (req, res) => {
    _id = req.params.id;

    Task.findById(_id)
        .then((task) => {
            if (!task) {
                return res.status(404).send({ error: "task not found!" });
            }
            res.send(task);
        })
        .catch((e) => {
            res.status(500).send(e);
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
