import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { GetProjects } from "../../../../redux/reducers/Project/ProjectReducer";
import { GetProjectsSelector } from "../../../../redux/reducers/Project/ProjectSelector";
import useDispatchOnMount from "../../../../Hooks/useDispatchOnMount/useDispatchOnMount";
import useShowOnScroll from "../../../../Hooks/useShowOnScroll/useShowOnScroll";
import ProjectsList from "./ProjectsList/ProjectsList";

/*====================*/

function ProjectsBlock() {
  return (
    <section className="projects light-block">
      <div className="container">
        <h2 className="custom-heading">Проекты</h2>
        <p className="line">
          Чтобы увидеть больше, перейдите на страницу{" "}
          <Link href="/projects">
            <a>проекты</a>
          </Link>
          .
        </p>
        <ProjectsList />
      </div>
    </section>
  );
}

/*====================*/

export default ProjectsBlock;
