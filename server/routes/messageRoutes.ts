import express from "express";
import MessageController from "../controllers/MessageController";

/*====================*/

const messageRouter = express.Router();

/*====================*/

messageRouter.route("/").post(MessageController.createMessage);

/*====================*/

export default messageRouter;
