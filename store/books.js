const Book = require("../book");
module.exports = {
	books: [
		new Book(
			"title 1",
			"description 1",
			"autors 1",
			false,
			"file cover 1",
			"file name 1",
			"/public/img/1691929453302-fileBook.png",
			"fileBook.png",
			"123456789"
		),
		new Book(
			"title 2",
			"description 2",
			"autors 2",
			true,
			"file cover 2",
			"file name 2",
			"/public/img/1691929453302-fileBook.png",
			"fileBook.png"
		),
		new Book(
			"title 3",
			"description 3",
			"autors 3",
			true,
			"file cover 3",
			"file name 3",
			"/public/img/1691929453302-fileBook.png",
			"fileBook.png"
		),
	],
};
