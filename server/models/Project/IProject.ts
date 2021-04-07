import { Document } from "mongoose";

/*====================*/

interface IProject extends Document {
  name: string;
  description: string;
  shortDescription: string;
  respository: string;
  images: Array<string>;
  slug: string;
}

/*====================*/

export default IProject;
