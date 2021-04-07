import mongoose from "mongoose";
import IMessage from "./IMessage";

/*====================*/

const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Имя не может быть пустым"],
  },
  email: {
    type: String,
    match: [/.+@.+\..+/, "Неправильная почта"],
    required: [true, "Почта не может быть пустой"],
  },
  message: {
    type: String,
    maxlength: [10000, "Слишком длинное сообщение"],
    required: [true, "Сообщение не может быть пустым"],
  },
});

/*====================*/

const Message = mongoose.model<IMessage>("Message", messageSchema);

/*====================*/

export default Message;
