import ActionsType from "../../Types/Actions";
import { Reducer } from "redux";
import IMessage from "../../../types/Content/IMessage/IMessage";
import catchThunk from "../../Types/Redusers";

/*====================*/

const SET_LOADING_STATUS = "Roxine/App/SET-LOADING-STATUS";

/*====================*/

const initState = {
  isLoading: false,
};
type AppStateType = typeof initState;

/*====================*/

type Actions = ActionsType<typeof AppActions>;

/*====================*/

const AppReducer: Reducer<AppStateType, Actions> = function (state = initState, action) {
  switch (action.type) {
    case SET_LOADING_STATUS:
      return {
        ...state,
        isLoading: action.payload.value,
      };
    default:
      return state;
  }
};

/*====================*/

export const AppActions = {
  setLoadingStatus(value: boolean) {
    return <const>{ type: SET_LOADING_STATUS, payload: { value } };
  },
};

/*====================*/

export default AppReducer;
