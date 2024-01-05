/**
 * @typedef {import('./interface.d.js').Book} Book
 */
import test from 'node:test'
import assert from 'node:assert'
import { book } from './index.js'

test('Test the book function', () => {
    /** @type {string} */
    const boosdk = 'J.K. Rowling'

    const result = book("Harry Potter", boosdk)

    /** @type {Book} */
    const expectedResult = {
        author: 'J.K. Rowling',
        title: "Harry Potter"
    }

    assert.deepEqual(result, expectedResult)
})
