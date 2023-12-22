/**
 * Represents a book.
 * @function
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */
function book(title, author) {
    return {
        title,
        author
    }
}

const boosdk = 1;

book("Harry Potter", boosdk);