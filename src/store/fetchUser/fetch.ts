import { Dispatch } from "redux";
import * as L from "../loading";
import * as E from "../errorMessage";
import { setUser, changeName, changeEmail, changePicture } from "./actions";
import * as D from "../../data";
import { IUser } from "../../data";
import { setLoading } from "../loading";
import { setErrorMessage } from "../errorMessage";

export const getRemoteUser = () => (dispatch: Dispatch) => {
  dispatch(L.setLoading(true));
  dispatch(E.setErrorMessage(""));
  D.fetchRandomUser()
    .then((user) => dispatch(setUser(user)))
    .catch((e: Error) => E.setErrorMessage(e.message))
    .finally(() => dispatch(L.setLoading(false)));
};
export const changeNameByFetching = () => (dispatch: Dispatch) => {
  dispatch(L.setLoading(true));
  dispatch(E.setErrorMessage(""));
  D.fetchRandomUser()
    .then((user) => dispatch(changeName(user.name)))
    .catch((e: Error) => E.setErrorMessage(e.message))
    .finally(() => dispatch(L.setLoading(false)));
};
export const changeEmailByFetching = () => (dispatch: Dispatch) => {
  dispatch(L.setLoading(true));
  dispatch(E.setErrorMessage(""));
  D.fetchRandomUser()
    .then((user: IUser) => dispatch(changeEmail(user.email)))
    .catch((e: Error) => dispatch(E.setErrorMessage(e.message)))
    .finally(() => dispatch(setLoading(false)));
};
export const changePictureByFetching = () => (dispatch: Dispatch) => {
  dispatch(L.setLoading(true));
  dispatch(E.setErrorMessage(""));
  D.fetchRandomUser()
    .then((user: IUser) => dispatch(changePicture(user.picture)))
    .catch((e: Error) => dispatch(setErrorMessage(e.message)))
    .finally(() => dispatch(setLoading(true)));
};
