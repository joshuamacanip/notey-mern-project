const mongoose = require("mongoose");

//schema and validation
const NoteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add a title."],
    },

    description: {
      type: String,
      required: [true, "Please add a description."],
    },

    body: {
      type: String,
      required: [true, "Please add a body to your note."],
    },

    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Note", NoteSchema);
