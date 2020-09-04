const mongoose = require("mongoose");
const { Schema } = mongoose;

const remetenteSchema = new Schema({
  email: String,
});

module.exports = remetenteSchema;
