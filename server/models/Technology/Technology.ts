import mongoose from "mongoose";

/*====================*/

const TechnologySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

/*====================*/

const Technology = mongoose.model(
  "Technology",
  TechnologySchema,
  "technologies"
);

/*====================*/

export default Technology;
