const express = require("express");
const bookStore = require("../store/books");

const router = express.Router();
router.put("/api/books/:id", (req, res) => {
	const { books } = bookStore;
	const {
		title,
		description,
		authors,
		favorite,
		fileCover,
		fileName,
		fileBook,
	} = req.body;
	const { id } = req.params;
	const index = books.findIndex((book) => book.id === id);
	if (index !== -1) {
		books[index] = {
			...books[index],
			title,
			description,
			authors,
			favorite,
			fileCover,
			fileName,
			fileBook,
		};
		res.json(books[index]);
	} else {
		res.status(404);
		res.json("Code: 404");
	}
});

module.exports = router;
