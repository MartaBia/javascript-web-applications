class NotesClient {
  async loadNotes(onSuccess, onError) {
    const apiUrl = "http://localhost:3000";

    fetch(`${apiUrl}/notes`)
      .then((result) => {
        if (!result.ok) {
          throw new Error("Response was not OK");
        }
      })
      .then((data) => onSuccess(data))
      .catch((error) => onError());
  }

  async createNote(note) {
    const apiUrl = "http://localhost:3000";

    const fetchResult = await fetch(`${apiUrl}/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ note }),
    });
    const jsonResult = await fetchResult.json;
    return jsonResult;
  }
}

// Commented for test
// const client = new NotesClient();
// client.loadNotes()
//   .then((notes) => console.log(notes));

module.exports = NotesClient;

// Done with Michal:
// class NotesClient {
//   loadNotes(callback) {
//     fetch("http://localhost:3000/notes")
//       .then((response) => response.json())
//       .then((data) => {
//         callback(data);
//       });
//   }

//   createNote(note){
// fetch('http://localhost:3000/notes', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({data: note})
// })
// .then((response) => response.json())
// .then((data) => {
//   console.log(note);
// });
//   }
// }
