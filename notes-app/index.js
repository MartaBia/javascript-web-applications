const NotesModel = require('./notesModel');
const notes = new NotesModel();

console.log('The notes app is running');
notes.addNote('Learn Javascript')
console.log(notes.getNotes())
