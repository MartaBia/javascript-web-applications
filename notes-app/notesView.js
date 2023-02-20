const NotesModel = require("./notesModel");
const NotesClient = require("./notesClient");

class NotesView {
  constructor(notesModel, notesClient) {
    this.notesModel = notesModel;
    this.notesClient = notesClient;
    this.mainContainerEl = document.querySelector("#main-container");
    this.buttonEl = document.querySelector("#show-message-button");

    this.buttonEl.addEventListener("click", () => {
      const messageInput = document.querySelector("#message-input");
      const newNote = messageInput.value;
      this.addNewNote(newNote);
    });
  }

  displayNotes() {
    document.querySelectorAll(".note").forEach((element) => {
      element.remove();
    });

    const notes = this.notesModel.getNotes();

    notes.forEach((note) => {
      const noteEl = document.createElement("div");
      noteEl.textContent = note;
      noteEl.className = "note";
      this.mainContainerEl.append(noteEl);
    });
  }

  addNewNote(newNote) {
    this.notesClient.createNote(newNote);
    this.displayNotesFromApi();
  }

  displayNotesFromApi() {
    this.notesClient.loadNotes((notes) => {
      this.notesModel.setNotes(notes);
      this.displayNotes();
    }, this.displayError());
  }

  displayError() {
    const errorEl = document.createElement("div");
    errorEl.id = "error-message";
    errorEl.textContent = "There has been an error!";
    this.mainContainerEl.append(errorEl);
  }
}

module.exports = NotesView;
