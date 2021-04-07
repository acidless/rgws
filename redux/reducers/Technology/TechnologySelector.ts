import { Selector } from "react-redux";
import { AppStateType } from "../../store";
import ITech from "../../../types/Content/ITechnology/ITech";

/*====================*/

export const GetTechnologiesSelector: Selector<AppStateType, Array<ITech>> = (state) => state.technology.technologies;
