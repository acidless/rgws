import ITech from "../ITechnology/ITech";

/*====================*/

interface IProject {
  _id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  repository: string;
  images: Array<string>;
  technologies: Array<ITech>;
}

/*====================*/

export default IProject;
