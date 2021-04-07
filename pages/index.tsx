import Layout from "../Components/Layout/Layout";
import ProjectsBlock from "../Components/PagesComponents/Index/ProjectsBlock/ProjectsBlock";
import TechnologiesBlock from "../Components/PagesComponents/Index/TechnologiesBlock/TechnologiesBlock";
import AboutMe from "../Components/PagesComponents/Index/AboutMe/AboutMe";
import MainBlock from "../Components/PagesComponents/Index/MainBlock/MainBlock";

/*====================*/

function Home() {
  return (
    <Layout>
      <MainBlock />
      <ProjectsBlock />
      <TechnologiesBlock />
      <AboutMe />
    </Layout>
  );
}

/*====================*/

export default Home;
