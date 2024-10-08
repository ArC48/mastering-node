const express = require("express");
const router = new express.Router();

//  user model
const User = require("../models/user");

router.get("/users", async (req, res) => {
    try {
        const users = await User.find({});
        res.send(users);
    } catch (e) {
        res.status(500).send(e);
    }
});

router.get("/users/:id", async (req, res) => {
    const _id = req.params.id;
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

router.post("/users", async (req, res) => {
    // Create a new user using the data from the request body
    const user = new User(req.body);
    try {
        await user.save();
        res.status(201).send(`${user.name} added!`);
    } catch (e) {
        res.status(400).send(e);
    }
});

router.patch("/users/:id", async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ["name", "email", "password", "age"];
    const isValidOperation = updates.every((update) => {
        return allowedUpdates.includes(update);
    });

    if (!isValidOperation) {
        return res.status(400).send({ error: "Invalid keys to change!" });
    }

    try {
        const _id = req.params.id;
        const user = await User.findByIdAndUpdate(_id, req.body, {
            new: true,
            runValidators: true,
        });

        if (!user) {
            return res.status(404).send();
        }

        res.send(user);
    } catch (e) {
        res.status(400).send(e);
    }
});

router.delete("/users/:id", async (req, res) => {
    const _id = req.params.id;
    try {
        const deletedUser = await User.findByIdAndDelete(_id);
        if (!deletedUser) {
            return res.status(404).send({ Error: "User not found" });
        }
        res.send(deletedUser);
    } catch (e) {
        res.status(500).send(e);
    }
});

module.exports = router;
