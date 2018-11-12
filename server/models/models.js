const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  value: String
});

const model = mongoose.model("user", UsersSchema);

module.exports = model;
