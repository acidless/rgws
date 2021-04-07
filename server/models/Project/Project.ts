import mongoose, { Schema } from "mongoose";
import IProject from "./IProject";
import slug from "../../utils/slug";

/*====================*/

const ProjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    shortDescription: {
      type: String,
      maxlength: 64,
    },
    reposistory: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
    technologies: [{ type: Schema.Types.ObjectId, ref: "Technology" }],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

ProjectSchema.index("slug");

const Project = mongoose.model<IProject>("Project", ProjectSchema, "projects");

/*====================*/

export default Project;
