import Project from "../models/Project/Project";
import Repository from "./Repository";

/*====================*/

class ProjectRepository extends Repository {
  constructor() {
    super();
    this.model = Project;
  }

  public async getAllProjects() {
    return this.model.find().select("name images slug shortDescription");
  }

  public async getThreeProjects() {
    return this.model.find().limit(3).select("name images slug shortDescription");
  }

  public async getOneProjectBySlug(slug: any) {
    if (!slug) return null;

    return this.model.findOne({ slug }).populate("technologies");
  }
}

/*====================*/

export default ProjectRepository;
