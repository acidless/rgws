import { Selector } from "react-redux";
import { AppStateType } from "../../store";

/*====================*/

export const GetMessagesStatus: Selector<AppStateType, any> = (state) => state.messages.message;
