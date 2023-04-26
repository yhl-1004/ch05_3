import type { Action } from "redux";
import * as D from "../../data";

export type State = D.IUser;
export type SetUserAction = Action<"@remoteUser/setUser"> & {
  payload: D.IUser;
};

export type ChangeEmailAction = Action<"@remoteUser/changeEmail"> & {
  payload: string;
};

export type NameType = {
  title: string;
  first: string;
  last: string;
};

export type ChangeNameAction = Action<"@remoteUser/changeName"> & {
  payload: NameType;
};

export type PictureType = { large: string };
export type ChangePictureAction = Action<"@remoteUser/changePicture"> & {
  payload: PictureType;
};

export type Actions =
  | SetUserAction
  | ChangeNameAction
  | ChangeEmailAction
  | ChangePictureAction;
