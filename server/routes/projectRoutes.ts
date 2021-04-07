import express from "express";
import ProjectController from "../controllers/ProjectController";

/*====================*/

const projectsRouter = express.Router();

/*====================*/

projectsRouter.route("/").get(ProjectController.getProjects);

projectsRouter.route("/:slug").get(ProjectController.getOneProjectBySlug);

/*====================*/

export default projectsRouter;
