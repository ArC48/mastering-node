// (initialize express server)

const express = require("express");

// Establish connection to the database (mongoose handles the connection)
require("./db/mongoose");

const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

// Create an Express application instance
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse incoming JSON requests into JavaScript objects
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log("Listening on Port: " + port);
});