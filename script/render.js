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
    if(comments.length === 0){
        return /*html*/`
            <p>Keine Kommentare vorhanden</p>
        `
    }

    let commentsHTML = "";
    
    for (let commentIndex = comments.length - 1; commentIndex >= 0; commentIndex--) {
        const comment = comments[commentIndex];
        commentsHTML += commentTemplate(comment);
    }

    return commentsHTML;
}