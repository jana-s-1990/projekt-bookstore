function likeBook(bookIndex) {
  let book = books[bookIndex];

  if (book.liked === false) {
    book.liked = true;
    book.likes++;
  } else {
    book.liked = false;
    book.likes--;
  }

  renderBooks();
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
