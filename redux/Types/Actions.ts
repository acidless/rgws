import { Action } from "redux";

/*====================*/

type ObjValuesType<Obj> = Obj extends { [key: string]: infer U } ? U : never;

type ActionsType<Obj extends ActionType> = ReturnType<ObjValuesType<Obj>>;

type ActionType = {
  [key: string]: (...args: any) => Action<string>;
};

export type DispatchActions<T> = T;

/*====================*/

export default ActionsType;
