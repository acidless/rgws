import catchAsync from "../utils/catchAsync";
import JSendSerializer from "../utils/JSend/JSendSerializer";
import TechnologyRepository from "../respositories/TechnologyRepository";

/*====================*/

class TechnologyController {
  private static technologyRepository = new TechnologyRepository();

  public static getTechnologies = catchAsync(async (req, res, next) => {
    const technologies = await TechnologyController.technologyRepository.getAll();

    res.status(200).json(JSendSerializer.serialize(true, technologies));
  });
}

/*====================*/

export default TechnologyController;
