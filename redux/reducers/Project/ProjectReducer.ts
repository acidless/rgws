import IProject from "../../../types/Content/IProject/IProject";
import ActionsType from "../../Types/Actions";
import { Reducer } from "redux";
import catchThunk from "../../Types/Redusers";
import ProjectsAPI from "../../../API/Projects/ProjectsAPI";
import { AppActions } from "../App/AppReducer";

/*====================*/

const SET_PROJECTS = "RGWS/Projects/SET-PROJECTS";
const SET_PROJECT = "RGWS/Projects/SET-PROJECT";

/*====================*/

const initState = {
  projects: [] as Array<IProject>,
  currentProject: null as null | IProject,
};

type ProjectsStateType = typeof initState;

/*====================*/

type Actions = ActionsType<typeof ProjectActions>;

/*====================*/

const ProjectsReducer: Reducer<ProjectsStateType, Actions> = function (state = initState, action) {
  switch (action.type) {
    case SET_PROJECTS:
      return {
        ...state,
        projects: action.payload.projects,
      };
    case SET_PROJECT:
      return {
        ...state,
        currentProject: action.payload.project,
      };
    default:
      return state;
  }
};

/*====================*/

export const ProjectActions = {
  setProjects(projects: Array<IProject>) {
    return <const>{ type: SET_PROJECTS, payload: { projects } };
  },
  setProject(project: IProject) {
    return <const>{ type: SET_PROJECT, payload: { project } };
  },
};

/*====================*/

export function GetProjects(all = false) {
  return catchThunk(async (dispatch) => {
    dispatch(AppActions.setLoadingStatus(true));

    const response = await (all ? ProjectsAPI.getAllProjects() : ProjectsAPI.getThreeProjects());

    if (response.success) {
      dispatch(ProjectActions.setProjects(response.data));
    }

    dispatch(AppActions.setLoadingStatus(false));
  });
}

export function GetProject(slug: string) {
  return catchThunk(async (dispatch) => {
    dispatch(AppActions.setLoadingStatus(true));

    const response = await ProjectsAPI.getProjectBySlug(slug);

    if (response.success) {
      dispatch(ProjectActions.setProject(response.data));
    } else {
      window.location.href = "/404";
    }

    dispatch(AppActions.setLoadingStatus(false));
  });
}

/*====================*/

export default ProjectsReducer;
