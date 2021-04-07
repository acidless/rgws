import Layout from "../../Components/Layout/Layout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProjects } from "../../redux/reducers/Project/ProjectReducer";
import Project from "../../Components/PagesComponents/Index/ProjectsBlock/ProjectsList/Project/Project";
import { GetProjectsSelector } from "../../redux/reducers/Project/ProjectSelector";
import { GetLoadingStatus } from "../../redux/reducers/App/AppSelector";
import Loader from "../../Components/Loader/Loader";

/*====================*/

function Projects() {
  const projects = useSelector(GetProjectsSelector);
  const isLoading = useSelector(GetLoadingStatus);

  /*====================*/

  const dispatch = useDispatch();

  /*====================*/

  useEffect(() => {
    dispatch(GetProjects(true));
  }, []);

  /*====================*/

  return (
    <Layout title="Projects">
      <section className="additional-block full-size-block">
        <div className="container">
          <h1 className="custom-heading">Проекты</h1>
          <p className="line">Список всех выполненных работ.</p>
          <div className="projects-grid-wrapper full-size-block">
            {projects.map((project) => {
              return <Project key={project._id} project={project} />;
            })}
          </div>
          {isLoading && <Loader />}
        </div>
      </section>
    </Layout>
  );
}

/*====================*/

export default Projects;
