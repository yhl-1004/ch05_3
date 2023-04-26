import type { FC } from "react";
import type { DivProps } from "./Div";
import * as D from "../data";
import { Div } from "../components";

export type UserProps = DivProps & {
  user: D.IUser;
};

export const User: FC<UserProps> = ({ user, ...props }) => {
  const { name, email, jobTitle, avatar } = user;
  return (
    <Div {...props}>
      <div className="ml-2">
        <p className="font-bold">{name.title}</p>
        <p className="text-gray-500 line-clamp-1">{jobTitle}</p>
        <p className="text-blue-500 underline">{email}</p>
      </div>
    </Div>
  );
};
