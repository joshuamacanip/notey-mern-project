const express = require("express");

const router = express.Router();

const {
  getNotes,
  getOneNote,
  createNote,
  updateNote,
  deleteNote,
} = require("../controller/controller");

router.get("/notes", getNotes);

router.post("/note", createNote);

router.get("/note/:id", getOneNote);

router.delete("/note/:id", deleteNote);

router.patch("/note/:id", updateNote);

module.exports = router;
