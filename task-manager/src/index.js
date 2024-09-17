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
app.post("/users", async (req, res) => {
    // Create a new user using the data from the request body
    const user = new User(req.body);
    try {
        await user.save();
        res.status(201).send(`${user.name} added!`);
    } catch (e) {
        res.status(400).send(e);
    }
});

app.get("/users", async (req, res) => {
    try {
        const users = await User.find({});
        res.send(users);
    } catch (e) {
        res.status(500).send(e);
    }
});

app.get("/users/:id", async (req, res) => {
    _id = req.params.id;
    try {
        const user = await User.findById(_id);
        if (!user) {
            return res.status(404).send({ error: "User Not Found!" });
        }
        res.send(user);
    } catch (e) {
        res.status(500).send(e);
    }
});

app.get("/tasks", async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.send(tasks);
    } catch (e) {
        res.status(500).send(e);
    }
});

app.get("/tasks/:id", async (req, res) => {
    _id = req.params.id;

    try {
        const task = await Task.findById(_id);
        if (!task) {
            return res.status(404).send({ error: "task not found!" });
        }
        res.send(task);
    } catch (e) {
        res.status(500).send(e);
    }
});

// POST request handler for creating new tasks
app.post("/tasks", async (req, res) => {
    try {
        const task = new Task(req.body);
        await task.save();
        res.status(201).send(`Task {${task.title}} added!`);
    } catch (e) {
        res.status(400).send(e);
    }
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log("Listening on Port: " + port);
});
