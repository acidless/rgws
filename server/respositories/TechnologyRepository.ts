import Repository from "./Repository";
import Technology from "../models/Technology/Technology";

/*====================*/

class TechnologyRepository extends Repository {
  constructor() {
    super();
    this.model = Technology;
  }

  public async getAll() {
    return this.model.find();
  }
}

/*====================*/

export default TechnologyRepository;
