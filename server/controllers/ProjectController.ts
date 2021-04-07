import catchAsync from "../utils/catchAsync";
import JSendSerializer from "../utils/JSend/JSendSerializer";
import ProjectRepository from "../respositories/ProjectRepository";
import AppError from "../utils/AppError";

/*====================*/

class ProjectController {
  private static projectRepository = new ProjectRepository();

  /*====================*/

  public static getOneProjectBySlug = catchAsync(async (req, res, next) => {
    const project = await ProjectController.projectRepository.getOneProjectBySlug(req.params.slug);
    if (!project) {
      return next!(new AppError(404, "Not Found"));
    }

    res.status(200).json(JSendSerializer.serialize(true, project));
  });

  public static getProjects = catchAsync(async (req, res, next) => {
    let projects;

    if (req.query.a && req.query.a === "all") {
      projects = await ProjectController.projectRepository.getAllProjects();
    } else {
      projects = await ProjectController.projectRepository.getThreeProjects();
    }

    res.status(200).json(JSendSerializer.serialize(true, projects));
  });
}

/*====================*/

export default ProjectController;
