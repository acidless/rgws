import MessageRepository from "../respositories/MessageRepository";
import catchAsync from "../utils/catchAsync";
import JSendSerializer from "../utils/JSend/JSendSerializer";
import AppError from "../utils/AppError";

/*====================*/

class MessageController {
  private static messageRepository = new MessageRepository();

  public static createMessage = catchAsync(async (req, res, next) => {
    try {
      const message = await MessageController.messageRepository.CreateMessage({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
      });
    } catch (e) {
      return next!(new AppError(400, e.message));
    }

    res.send(JSendSerializer.serialize(true));
  });
}

/*====================*/

export default MessageController;
