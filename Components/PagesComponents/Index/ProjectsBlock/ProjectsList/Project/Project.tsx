import Link from "next/link";
import IProject from "../../../../../../types/Content/IProject/IProject";

/*====================*/

type PropsType = {
  project: IProject;
};

/*====================*/

const Project: React.FC<PropsType> = function ({ project }) {
  return (
    <div className="project">
      <Link href={`/projects/${project.slug}`}>
        <a className="full-size-block">
          <img className="project__image full-size-block" src={project.images[0]} alt="" />
          <div className="full-size-block project__info flex-container">
            <h3>{project.name}</h3>
            {project.shortDescription && <p>{project.shortDescription}</p>}
          </div>
        </a>
      </Link>
    </div>
  );
};

/*====================*/

export default Project;
