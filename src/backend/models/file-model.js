const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
  creator: { type: String },
  uploadedFile: { type: String, default: "im uploaded document" },
  // title: { type: String, default: "title of document" },
  approved: { type: Boolean, default: false },
  disapproved: { type: String, default: "awaiting" },
  grade: { type: String },
  subject: { type: String },
});

module.exports = mongoose.model("Note", notesSchema);
