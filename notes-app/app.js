const notes = require("./notes");
const chalk = require("chalk");
const yargs = require("yargs");

// Customize yargs version
yargs.version("1.1.0");

// Create add command
yargs.command({
    command: "add",
    description: "adds a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string",
        },
        body: {
            describe: "note body",
            demandOption: true,
            type: "string",
        },
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    },
});

// Create remove command
yargs.command({
    command: "remove",
    description: "removes a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string",
        },
    },
    handler(argv) {
        notes.removeNotes(argv.title);
    },
});

// Create list command
yargs.command({
    command: "list",
    description: "lists all the notes",
    handler() {
        notes.listNotes();
    },
});

// Create read command
yargs.command({
    command: "read",
    description: "reads all the notes",
    builder: {
        title: {
            description: "Note title",
            demandOption: true,
            type: "string",
        },
    },
    handler(argv) {
        notes.readNote(argv.title);
    },
});

yargs.parse();
