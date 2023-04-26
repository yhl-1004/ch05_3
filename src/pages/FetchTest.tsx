import { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "../theme/daisyui";
import * as D from "../data";
import type { AppState } from "../store";
import * as F from "../store/fetchUser";

export default function FetchTest() {
  const dispatch = useDispatch();

  const {
    loading,
    errorMessage,
    fetchUser: user,
  } = useSelector<AppState, AppState>((state) => state);

  const getRemoteUser = useCallback(() => {
    dispatch<any>(F.getRemoteUser());
  }, [dispatch]);
  const changeName = useCallback(() => {
    dispatch<any>(F.changeNameByFetching());
  }, [dispatch]);
  const changeEmail = useCallback(() => {
    dispatch(F.changeEmail(D.randomEmail()));
  }, [dispatch]);

  const changePicture = useCallback(() => {
    dispatch(F.changePicture(D.makeRandomPicture()));
  }, [dispatch]);

  useEffect(getRemoteUser, [getRemoteUser]);

  return (
    <section className="mt-4">
      <div>fetchTest</div>
      <div className="flex justify-center mt-4">
        <Button className="btn btn-sm btn-primary" onClick={getRemoteUser}>
          getRemoteUser
        </Button>
        <Button className="ml-4 btn-sm btn-accent" onClick={changeName}>
          change name
        </Button>
        <Button className="ml-4 btn-sm btn-success" onClick={changeEmail}>
          change email
        </Button>
        <Button className="ml-4 btn-sm btn-secondary" onClick={changePicture}>
          change picture
        </Button>
      </div>
      {loading && (
        <div className="flex items-center justify-center">
          <button className="btn btn-circle loading"></button>
        </div>
      )}
      {errorMessage && (
        <div className="p-4 mt-4 bg-red-200">
          <p className="text-3xl text-red-500 text-bold">{errorMessage}</p>
        </div>
      )}
      {user && (
        <div className="flex justify-center p-4 mt-4">
          <div className="w-10 h-10">
            <img src={user.picture.large}></img>
          </div>
          <div className="ml-4">
            <p className="text-xl text-bold">
              {user.name.title}. {user.name.first}
              {user.name.last}
            </p>
            <p className="italic text-gray-600">{user.email}</p>
          </div>
        </div>
      )}
    </section>
  );
}
