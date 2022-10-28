const newAuthorModel = require("../models/newAuthorModel");
const newBookModel = require("../models/newBookModel");
const newPublisherModel = require("../models/newPublisherModel");

const createNewAuthor = async function (req, res) {
  let data = req.body;
  const { author_name, address } = data;
  if (!author_name) {
   return res.send("Name is Required");
  }
  if (!address) {
    return res.send("Address is Required");
  }
  let savedData = await newAuthorModel.create(data);
  res.send({ msg: savedData });
};

const getNewAuthor = async function (req, res) {
  let allUsers = await newAuthorModel.find();
  res.send({ msg: allUsers });
};

const createNewBook = async function (req, res) {
  let data = req.body;
  const { bookName} = data;
  if (!bookName) {
    res.send("bookName is Required");
  }
  let savedData = await newBookModel.create(data);
  res.send({ msg: savedData });
};

const getNewBook = async function (req, res) {
  let allUsers = await newBookModel.find().populate("author_id").populate("publisher");
  res.send({ msg: allUsers });
};

const createNewPublisher = async function (req, res) {
  let data = req.body;
  const { name, headQuarter } = data;
  if (!name) {
    res.send("Name is Required");
  }
  if (!headQuarter) {
    res.send("headQuarter is Required");
  }
  let savedData = await newPublisherModel.create(data);
  res.send({ msg: savedData });
};

const getNewPublisher = async function (req, res) {
  let allUsers = await newPublisherModel.find();
  res.send({ msg: allUsers });
};

module.exports.createNewAuthor = createNewAuthor;
module.exports.getNewAuthor = getNewAuthor;
module.exports.createNewBook = createNewBook;
module.exports.getNewBook = getNewBook;
module.exports.createNewPublisher = createNewPublisher;
module.exports.getNewPublisher = getNewPublisher;



