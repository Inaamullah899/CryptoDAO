const mongoose = require("mongoose");

const { schema } = require("mongoose");
const commentSchema = new schema(
  {
    content: { type: string, required: true },
    author: { type: mongoose.SchemaType.objectId, ref: "user" },
    blog: { type: mongoose.SchemaType.ObjectId, ref: "blog" },
  },
  { timestamps: true }
);
module.exports = mongoose.model("comment", commentSchema, "blogs");
