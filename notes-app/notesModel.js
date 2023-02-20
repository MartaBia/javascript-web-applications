class NotesModel{
  constructor(){
    this.notes = [];
  };

  addNote(item){
    return this.notes.push(item);
  };

  setNotes(notes){
   this.notes = notes;
  };

  getNotes(){
    return this.notes;
  };

  reset() {
    return this.notes = [];
  };
};

module.exports = NotesModel;