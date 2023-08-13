const express = require("express");
const Book = require("../book");
const bookStore = require("../store/books");
const fileMulter = require("../middleware/file");

const router = express.Router();
router.post("/api/books", fileMulter.single("fileBook"), (req, res) => {
	const { books } = bookStore;

	if (req.file) {
		const { path } = req.file;
		const {
			title,
			description,
			authors,
			favorite,
			fileCover,
			fileName,
		} = req.body;
		const newBook = new Book(
			title,
			description,
			authors,
			favorite,
			fileCover,
			fileName,
			path
		);
		books.push(newBook);
		res.status(201);
		res.json(newBook);
	}
});
module.exports = router;
