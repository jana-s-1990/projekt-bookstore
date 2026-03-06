function commentTemplate(comment) {
  return /*html*/ `
        <p>[${comment.name}]</p>
        <p>${comment.comment}</p>
    `;
}

function bookTemplate(book, bookIndex) {
  return /*html*/ `
        <div class="book">
            <div class="book-headline">
                <h2>${book.name}</h2>
            </div>
            <figure class="book-img display-flex flex-center-x">
                <img src="assets/img/book-placeholder.png" alt="${book.name}">
            </figure>
            <div class="book-content-container">
                <div class="book-price-likes display-flex flex-center-x flex-space-between">
                    <p class="book-price">${book.price}</p>
                    <div class="likes-container display-flex flex-center-x">
                        <p>${book.likes}</p>
                        <button class="like-btn" onclick="likeBook(${bookIndex})"><i class="${book.liked ? "fa-solid" : "fa-regular"} fa-heart"></i></button>
                    </div>
                </div>
                <div class="book-description">
                    <table class="book-info">
                        <tr>
                            <td><strong>Autor</strong></td>
                            <td>${book.author}</td>
                        </tr>
                        <tr>
                            <td><strong>Erscheinungsjahr</strong></td>
                            <td>${book.publishedYear}</td>
                        </tr>
                        <tr>
                            <td><strong>Genre</strong></td>
                            <td>${book.genre}</td>
                        </tr>
                    </table>
                </div>
                <div class="book-comments">
                    <h3><strong>Kommentare:</strong></h3>
                    <div id="book-comment-container" class="book-comment">
                        ${renderComments(book.comments)}
                    </div>
                    <div class="comment-input-container display-flex flex-space-between">
                        <input id="comment-input-${bookIndex}" class="comment-input-user" type="text" placeholder="Kommentar hinzufügen ...">
                        <button class="comment-btn" onclick="addComment(${bookIndex})"><i class="fa-regular fa-paper-plane"></i></button>
                    </div>
                </div>
            </div>
        </div>
    `;
}
