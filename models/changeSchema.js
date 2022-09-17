const mongoose = require("mongoose");

const changeSchema = new mongoose.Schema({
  name: { type: String, required: [true, "name is required"], trim: true },
  completed: { type: Boolean, default: false },
  change: { type: String },
});

module.exports = mongoose.model("Change", changeSchema);
