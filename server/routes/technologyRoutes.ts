import express from "express";
import TechnologyController from "../controllers/TechnologyController";

/*====================*/

const technologiesRouter = express.Router();

/*====================*/

technologiesRouter.route("/").get(TechnologyController.getTechnologies);

/*====================*/

export default technologiesRouter;
