import * as C from "./chance";
import * as I from "./image";

export type NameType = {
  title: string;
  first: string;
  last: string;
};

export type PictureType = {
  large: string;
};

export type IUser = {
  uuid: string;
  name: NameType;
  jobTitle: string;
  email: string;
  avatar: string;
  picture: PictureType;
};

export const makeUser = (
  uuid: string,
  name: NameType,
  jobTitle: string,
  email: string,
  avatar: string,
  picture: PictureType
): IUser => ({ uuid, name, jobTitle, email, avatar, picture });

// export const makeRandomName = () => {
//   const title = C.randomName()
//   const first = C.randomFirstName()
//   const last = C.randomLastName()
//   return {title, first , last}
// }

export const makeRandomName = (): NameType => {
  const title = C.randomName();
  const first = C.randomFirstName();
  const last = C.randomLastName();
  return { title, first, last };
};

export const makeRandomPicture = (): PictureType => {
  const large = I.randomAvatar();
  // const large = C.randomAvartar();
  return { large: large };
};

export const makeRandomUser = (): IUser =>
  makeUser(
    C.ramdomUUID(),
    makeRandomName(),
    C.randomJobTitle(),
    C.randomEmail(),
    I.randomAvatar(),
    makeRandomPicture()
  );
