/**
 * @typedef {import('./interface.d.ts').Book} Book
 *
 * Represents a book.
 * @function
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 * @returns {Book} The book object.
 */
export function book(title, author) {
    return {
        title,
        author
    }
}
