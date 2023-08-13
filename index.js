const express = require("express");
// middlewares
const notFound = require("./middleware/404");
// routes
const index = require("./routes/index");
const getBooks = require("./routes/getBooks");
const getBook = require("./routes/getBook");
const bookDownload = require("./routes/bookDownload");
const postUserLogin = require("./routes/postUserLogin");
const addBook = require("./routes/addBook");
const putBook = require("./routes/putBook");
const deleteBook = require("./routes/deleteBook");

const app = express();
app.use(express.json());
app.use("/public", express.static(__dirname + "/public"));
app.use("", index);
app.use("", getBooks);
app.use("", getBook);
app.use("", bookDownload);
app.use("", postUserLogin);
app.use("", addBook);
app.use("", putBook);
app.use("", deleteBook);
app.use(notFound);

const PORT = process.env.PORT || 3000;
app.listen(PORT, "127.0.0.1", () => {
	console.log(`Server started on port ${PORT}`);
});
