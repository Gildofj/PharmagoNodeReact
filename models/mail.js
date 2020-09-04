const mongoose = require("mongoose");
const { Schema } = mongoose;
const remetenteSchema = require("./remetentes");

mailSchema = new Schema({
  titulo: String,
  subject: String,
  remetentes: [remetenteSchema],
  body: String,
  _user: { type: Schema.Types.ObjectId, ref: "user" },
  dataSent: Date,
});

mongoose.model("mail", mailSchema);
