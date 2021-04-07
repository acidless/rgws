import { Dispatch } from "redux";
import { DispatchActions } from "./Actions";

type Thunk = (dispatch: Dispatch<DispatchActions<any>>, getState?: any) => void;

/*====================*/

export default function catchThunk(fn: Thunk, getState?: any) {
  return function (dispatch: Dispatch<DispatchActions<any>>, getState: any) {
    try {
      fn(dispatch, getState);
    } catch (e) {
      console.log(e);
    }
  };
}
