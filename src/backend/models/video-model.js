const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  creator: { type: String },
  uploadedFile: { type: String, default: "im uploaded document" },
  approved: { type: Boolean, default: false },
  disapproved: { type: String, default: "awaiting" },
  grade: { type: String },
  subject: { type: String },
});

module.exports = mongoose.model("Video", videoSchema);
