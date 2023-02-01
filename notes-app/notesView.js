const NotesModel = require('./notesModel');

class NotesView {
  constructor(notesModel) {
    this.notesModel = notesModel;
    this.mainContainerEl = document.querySelector('#main-container');
    // this.buttonEl = document.querySelector('#show-message-button');

    document.querySelector('#show-message-button').addEventListener('click', () => {
      const newNote = document.querySelector('#message-input').value;
      this.addNewNote(newNote);
    });
  //   this.buttonEl.addEventListener('click', () => {
  //     this.displayMessage();
  //  });
  }

  displayNotes() {
      document.querySelectorAll('.note').forEach(element => {
          element.remove();
        })

    const notes = this.notesModel.getNotes();

    notes.forEach(note => {
      const noteEl = document.createElement('div');
      noteEl.textContent = note;
      noteEl.className = 'note';
      this.mainContainerEl.append(noteEl);
    });
  }

  addNewNote(newNote) {
    this.notesModel.addNote(newNote);
    this.displayNotes();
  }
};

module.exports = NotesView;