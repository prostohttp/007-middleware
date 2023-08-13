const express = require("express");
const path = require("path");
const bookStore = require("../store/books");

const router = express.Router();
router.get("/api/books/:id/download", (req, res) => {
	const { books } = bookStore;
	const { id } = req.params;
	const index = books.findIndex((book) => book.id === id);
	if (books[index].fileBook) {
    const origFileName = books[index].fileBook.split("-")[1];
    res.download(path.join(__dirname, '../', books[index].fileBook), origFileName);
	} else {
		res.status(404);
		res.json("Code: 404");
	}
});

module.exports = router;
