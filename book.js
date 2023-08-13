const { v4: uuid } = require("uuid");

class Book {
	/**
	 * Create a book.
	 * @param {string} title - The title of the book.
	 * @param {string} description - The description of the book.
	 * @param {string} authors - The authors of the book.
	 * @param {boolean} favorite - The favorite status of the book.
	 * @param {string} fileCover - The file cover of the book.
	 * @param {string} fileName - The file name of the book.
	 * @param {string} fileBook - The file of the book.
	 * @param {string} originalname - The original name of file of the book.
	 * @param {string} id - The ID of the book.
	 */
	constructor(
		title = "",
		description = "",
		authors = "",
		favorite = false,
		fileCover = "",
		fileName = "",
		fileBook = "",
		originalName = "",
		id = uuid()
	) {
		this.title = title;
		this.description = description;
		this.authors = authors;
		this.favorite = favorite;
		this.fileCover = fileCover;
		this.fileName = fileName;
		this.fileBook = fileBook;
		this.originalName = originalName
		this.id = id;
	}
}

module.exports = Book;
