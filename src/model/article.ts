import mongoose, { Schema } from "mongoose"

const articleSchema: Schema = new mongoose.Schema(
  {
    title: {
      type: "string",
      required: true,
      trim: true,
    },
    content: {
      type: "string",
      required: true,
      trim: true,
    },
    author: {
      type: "string",
      required: true,
      trim: true,
    }
  },
  {
    timestamps: true,
  }
);

const Article = mongoose.model("Article", articleSchema)
export default Article