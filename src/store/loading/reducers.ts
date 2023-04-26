import type * as T from "./types";

const initialState: T.State = false;

export const reducer = (state: T.State = initialState, action: T.Actoin) => {
  switch (action.type) {
    case "@loading/setLoadingAction":
      return action.payload;
  }
  return state;
};
