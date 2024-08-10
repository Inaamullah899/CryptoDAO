const mongoose = require("mongoose");

const { schema } = require("mongoose");
const userSchema = new schema(
  {
    name: { type: string, required: true },
    userName: { type: string, required: true },
    email: { type: string, required: true, unique: true },
    password: { type: string, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("user", userSchema, "users");
