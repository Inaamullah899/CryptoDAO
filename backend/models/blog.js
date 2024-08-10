const mongoose = require("mongoose");

const { schema } = require("mongoose");
const blogSchema = new schema(
  {
    title: { type: string, required: true },
    content: { type: string, required: true },
    photopath: { type: string, required: true },
    author: { type: mongoose.SchemaType.objectId, ref: "user" },
  },
  { timestamps: true }
);
module.exports = mongoose.model("blog", blogSchema, "blogs");
