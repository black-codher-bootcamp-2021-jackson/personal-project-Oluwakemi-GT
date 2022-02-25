const mongoose = require("mongoose");
const { Schema } = mongoose;

const wordbankSchema = new Schema({
  name: String,
  word: Array,
});

mongoose.model("wordbank", wordbankSchema);
