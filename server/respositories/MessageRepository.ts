import Repository from "./Repository";
import Message from "../models/Message/Message";

/*====================*/

class MessageRepository extends Repository {
  constructor() {
    super();
    this.model = Message;
  }

  public async CreateMessage(data: any) {
    return this.model.create(data);
  }
}

/*====================*/

export default MessageRepository;
