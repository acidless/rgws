import { Selector } from "react-redux";
import { AppStateType } from "../../store";
import IProject from "../../../types/Content/IProject/IProject";

/*====================*/

export const GetProjectsSelector: Selector<AppStateType, Array<IProject>> = (state) => state.project.projects;

export const GetCurrentProject: Selector<AppStateType, IProject | null> = (state) => state.project.currentProject;
