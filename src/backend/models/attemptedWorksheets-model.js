const mongoose = require("mongoose");

const attemptedWSschema = new mongoose.Schema({
  creator: { type: String },
  attempter: { type: String },
  title: { type: String },
  code: { type: String },
  scores: { type: Number },
  grade: { type: String },
  subject: { type: String },
  time: { type: Number },
  type: { type: String },
});

module.exports = mongoose.model("attemptedWS", attemptedWSschema);
