function init(){
    loadNotes();
    renderBooks();
}

function saveBooks() {
  localStorage.setItem("books", JSON.stringify(books));
}

function loadNotes() {
  let notesFromStorage = JSON.parse(localStorage.getItem("books"));
  if (notesFromStorage !== null) {
    books = notesFromStorage;
  }
}

function renderBooks(){
    let booksContainerRef = document.getElementById('books-content');
    booksContainerRef.innerHTML = "";

    for (let bookIndex = 0; bookIndex < books.length; bookIndex++) {
        const book = books[bookIndex];
        booksContainerRef.innerHTML += bookTemplate(book, bookIndex);
    }

    saveBooks();
}

function renderComments(comments){
    let commentsHTML = "";

    if(comments.length === 0){
        return /*html*/`
            <p>Keine Kommentare vorhanden</p>
        `
    }
    
    for (let commentIndex = comments.length - 1; commentIndex >= 0; commentIndex--) {
        const comment = comments[commentIndex];
        commentsHTML += commentTemplate(comment);
    }

    return commentsHTML;
}

function renderLikeButton(book, bookIndex){
    let likeButtonContainerRef = document.getElementById(`likes-content-${bookIndex}`);
    likeButtonContainerRef.innerHTML = templateLikeButton(book, bookIndex);
}

function likeBook(bookIndex) {
  let book = books[bookIndex];

  if (book.liked === false) {
    book.liked = true;
    book.likes++;
  } else {
    book.liked = false;
    book.likes--;
  }
  
  renderLikeButton(book, bookIndex);
  saveBooks();
}

function addComment(bookIndex) {
  let commentInputRef = document.getElementById(`comment-input-${bookIndex}`);
  let commentText = commentInputRef.value;
  books[bookIndex].comments.push({
    name: "Jana",
    comment: commentText,
  });

  renderBooks();
}