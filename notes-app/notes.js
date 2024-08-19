const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
    return "Your Notes";
};

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => note.title == title);
    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body,
        });

        saveNotes(notes);
        console.log(chalk.green(`Note "${chalk.blue(title)}" Added!`));
    } else {
        console.log(chalk.red(`Note "${chalk.blue(title)}" already exists!`));
    }
};

const saveNotes = (notes) => {
    const dataStr = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataStr);
    return true;
};

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync("notes.json");
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};

const removeNotes = (title) => {
    const notes = loadNotes();
    const currentNotesLength = notes.length;
    // check if there is a note we wanna delete
    if (notes.length == 0) {
        return false;
    }
    const newNotes = notes.filter((note) => title !== note.title);

    if (currentNotesLength === newNotes.length) {
        console.log(chalk.red(`No note named: "${title}"`));
    } else {
        console.log(chalk.green(`removed a note named: "${title}"`));
        saveNotes(newNotes);
    }
};

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNotes: removeNotes,
};
