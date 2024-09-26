const express = require("express");
const router = new express.Router();

//  task model
const Task = require("../models/task");

router.get("/tasks", async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.send(tasks);
    } catch (e) {
        res.status(500).send(e);
    }
});

router.get("/tasks/:id", async (req, res) => {
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
router.post("/tasks", async (req, res) => {
    try {
        const task = new Task(req.body);
        await task.save();
        res.status(201).send(`Task {${task.title}} added!`);
    } catch (e) {
        res.status(400).send(e);
    }
});

router.patch("/tasks/:id", async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ["title", "completed"];
    const allowedOperation = updates.every((update) => {
        return allowedUpdates.includes(update);
    });

    if (!allowedOperation) {
        return res.status(400).send({ Error: "Invalid keys to change!" });
    }

    try {
        _id = req.params.id;
        const updatedTask = await Task.findByIdAndUpdate(_id, req.body, {
            new: true,
            runValidators: true,
        });

        if (!updatedTask) {
            return res.status(404).send({ "Error:": "Can't find a task!" });
        }

        res.send(updatedTask);
    } catch (e) {
        res.status(500).send(e);
    }
});

router.delete("/tasks/:id", async (req, res) => {
    const _id = req.params.id;
    try {
        const deletedTask = await Task.findByIdAndDelete(_id);
        if (!deletedTask) {
            return res.status(404).send({ Error: "Task not found" });
        }
        res.send(deletedTask);
    } catch (e) {
        res.status(500).send(e);
    }
});

module.exports = router;
