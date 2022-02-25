const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    user_id: String,
    user_name: String,
    email: String,
    password: String,
    created_at: Date,
    avatar_url: String,
});

mongoose.model("user", userSchema);
