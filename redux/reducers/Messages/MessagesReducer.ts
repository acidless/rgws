import { Reducer } from "redux";
import ActionsType from "../../Types/Actions";
import IMessage from "../../../types/Content/IMessage/IMessage";
import catchThunk from "../../Types/Redusers";
import MessagesAPI from "../../../API/Messages/MessagesAPI";

/*====================*/

const SET_ERROR = "RGWS/Messages/SET_ERROR";

/*====================*/

const initState = {
  message: {
    isError: false,
    text: null as string | null,
  },
};
type MessagesStateType = typeof initState;

/*====================*/

type Actions = ActionsType<typeof MessagesActions>;

/*====================*/

const MessagesReducer: Reducer<MessagesStateType, Actions> = function (state = initState, actions) {
  switch (actions.type) {
    case SET_ERROR:
      return {
        ...state,
        message: actions.payload.message,
      };
    default:
      return state;
  }
};

/*====================*/

const MessagesActions = {
  setErorr(text: string | null, isError: boolean) {
    return <const>{ type: SET_ERROR, payload: { message: { isError, text } } };
  },
};

/*====================*/

export function SendMessageThunk(data: IMessage) {
  return catchThunk(async (dispatch) => {
    const response = await MessagesAPI.createMessage(data);

    if (response.success) {
      dispatch(MessagesActions.setErorr("Сообщение отправлено!", false));
    } else {
      dispatch(MessagesActions.setErorr(response.message!, true));
    }
  });
}

/*====================*/

export default MessagesReducer;
