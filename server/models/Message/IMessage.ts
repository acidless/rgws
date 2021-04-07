import { Document } from "mongoose";

/*====================*/

interface IMessage extends Document {
  name: string;
  email: string;
  message: string;
}

/*====================*/

export default IMessage;
