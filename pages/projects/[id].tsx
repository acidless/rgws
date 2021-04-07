import Layout from "../../Components/Layout/Layout";
import { useRouter } from "next/router";
import { GetProject } from "../../redux/reducers/Project/ProjectReducer";
import { useSelector } from "react-redux";
import { GetCurrentProject } from "../../redux/reducers/Project/ProjectSelector";
import { GetLoadingStatus } from "../../redux/reducers/App/AppSelector";
import TechnologiesBlock from "../../Components/PagesComponents/Index/TechnologiesBlock/TechnologiesBlock";
import ProjectMainBlock from "../../Components/PagesComponents/Project/ProjectMainBlock/ProjectMainBlock";
import ProjectInfo from "../../Components/PagesComponents/Project/ProjectInfo/ProjectInfo";
import ProjectLoading from "../../Components/PagesComponents/Project/ProjectLoading/ProjectLoading";
import useIdForDispatch from "../../Hooks/UseIdForDispatch/UseIdForDispatch";

/*====================*/

function ProjectPage() {
  const router = useRouter();
  /*====================*/

  const currentProject = useSelector(GetCurrentProject);
  const isLoading = useSelector(GetLoadingStatus);

  /*====================*/

  const id = router.query.id;

  /*====================*/

  useIdForDispatch(id, GetProject);

  /*====================*/

  return (
    <Layout title={currentProject?.name}>
      {!isLoading && currentProject ? (
        <div className="project-wrapper full-size-block">
          <ProjectMainBlock
            projectName={currentProject.name}
            shortDescription={currentProject.shortDescription}
            images={currentProject.images}
          />
          <ProjectInfo repository={currentProject.repository} description={currentProject.description} />
          <TechnologiesBlock isForAll={false} technologies={currentProject.technologies} />
        </div>
      ) : (
        <ProjectLoading />
      )}
    </Layout>
  );
}

/*====================*/

export default ProjectPage;
