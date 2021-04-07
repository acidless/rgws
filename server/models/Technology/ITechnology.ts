import { Document } from "mongoose";

/*====================*/

interface ITechnology extends Document {
  name: string;
  image: string;
}

/*====================*/

export default ITechnology;
