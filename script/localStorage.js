function saveBooks() {
  localStorage.setItem("books", JSON.stringify(books));
}

function loadNotes() {
  let notesFromStorage = JSON.parse(localStorage.getItem("books"));
  if (notesFromStorage !== null) {
    books = notesFromStorage;
  }
}