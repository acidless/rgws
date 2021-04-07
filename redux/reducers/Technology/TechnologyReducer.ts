import ITech from "../../../types/Content/ITechnology/ITech";
import ActionsType from "../../Types/Actions";
import { Reducer } from "redux";
import catchThunk from "../../Types/Redusers";
import TechnologiesAPI from "../../../API/Technologies/TechnologiesAPI";

/*====================*/

const SET_TECHNOLOGIES = "RGWS/Technologies/SET-TECHNOLOGIES";

/*====================*/

const initState = {
  technologies: [] as Array<ITech>,
};

type TechStateType = typeof initState;

/*====================*/

type Actions = ActionsType<typeof TechActions>;

/*====================*/

const TechReducer: Reducer<TechStateType, Actions> = function (state = initState, action) {
  switch (action.type) {
    case SET_TECHNOLOGIES:
      return {
        ...state,
        technologies: action.payload.technologies,
      };
    default:
      return state;
  }
};

/*====================*/

export const TechActions = {
  setTechnologies(technologies: Array<ITech>) {
    return <const>{ type: SET_TECHNOLOGIES, payload: { technologies } };
  },
};

/*====================*/

export function GetTechnologies() {
  return catchThunk(async (dispatch) => {
    const response = await TechnologiesAPI.getTechnologies();

    if (response.success) {
      dispatch(TechActions.setTechnologies(response.data));
    }
  });
}

/*====================*/

export default TechReducer;
