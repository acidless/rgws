import Project from "./Project/Project";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { GetProjectsSelector } from "../../../../../redux/reducers/Project/ProjectSelector";
import useDispatchOnMount from "../../../../../Hooks/useDispatchOnMount/useDispatchOnMount";
import { GetProjects } from "../../../../../redux/reducers/Project/ProjectReducer";
import useShowOnScroll from "../../../../../Hooks/useShowOnScroll/useShowOnScroll";
import { GetLoadingStatus } from "../../../../../redux/reducers/App/AppSelector";
import Loader from "../../../../Loader/Loader";

/*====================*/

function ProjectsList() {
  const [isActive, setActive] = useState(false);

  /*====================*/

  const projectsBlock = useRef(null);

  /*====================*/

  const projects = useSelector(GetProjectsSelector);
  const isLoading = useSelector(GetLoadingStatus);

  /*====================*/

  useDispatchOnMount(GetProjects);
  useShowOnScroll(projectsBlock, setActive);

  /*====================*/

  return (
    <div ref={projectsBlock} className={`${isActive ? "active " : ""}projects__content flex-container`}>
      {isLoading ? (
        <Loader useAdditionalColor />
      ) : (
        projects.map((project) => {
          return <Project key={project._id} project={project} />;
        })
      )}
    </div>
  );
}

/*====================*/

export default ProjectsList;
