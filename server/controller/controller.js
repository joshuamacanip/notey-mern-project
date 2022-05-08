const Note = require("../model/notes");
const asynWrapper = require("../middleware/asyncWrapper");
const { createCustomError } = require("../error/customError");

// GET all notes
const getNotes = async (req, res, next) => {
  //query all notes
  const notes = await Note.find({});

  //check
  if (!notes) {
    return next(createCustomError("Unsuccessful to fetch notes", 404));
  }

  //response
  res.status(200).json(notes);
};

// GET - get one note
const getOneNote = async (req, res, next) => {
  //note id
  const { id: taskID } = req.params;

  //query for one note
  const note = await Note.findById(taskID);

  //check
  if (!note) {
    return next(createCustomError("Cannot find this one note.", 404));
  }

  //response
  res.status(200).json({ note });
};

//POST - create one one
const createNote = async (req, res, next) => {
  //create new note
  const note = await Note.create(req.body);

  //check
  if (!note) {
    return next(createCustomError("Failed to create new note", 404));
  }

  //response
  res.status(200).send({ note });
};

//PATCH - update one note
const updateNote = async (req, res, next) => {
  //note id
  const { id: taskID } = req.params;

  //update note with body payload
  const note = await Note.findByIdAndUpdate(taskID, req.body, {
    new: true,
    runValidators: true,
  });

  //check
  if (!note) {
    return next(
      createCustomError("Cannot update this note because of invalid id", 404)
    );
  }

  //response
  res.status(200).json({ note });
};

const deleteNote = async (req, res, next) => {
  //note id
  const { id: taskID } = req.params;

  //delete one note
  const note = await Note.findByIdAndDelete(taskID);

  //check
  if (!note) {
    return next(
      createCustomError("Cannot delete this note because of invalid id", 404)
    );
  }

  //response
  res.status(200).json({ note });
};

module.exports = {
  getNotes,
  getOneNote,
  createNote,
  updateNote,
  deleteNote,
};
