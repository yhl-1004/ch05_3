export type IRandomUser = {
  email: string;
  name: { title: string; first: string; last: string };
  uuid: string;
  jobTitle: string;
  avatar: string;
  picture: { large: string };
};

const convertRandomUser = (result: unknown) => {
  const { email, name, picture, uuid, jobTitle, avatar } =
    result as IRandomUser;
  return { email, name, picture, uuid, jobTitle, avatar };
};

export const fetchRandomUser = (): Promise<IRandomUser> =>
  new Promise((resolve, reject) => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data: unknown) => {
        console.log(data);
        const { results } = data as { results: IRandomUser[] };
        resolve(convertRandomUser(results[0]));
      })
      .catch(reject);
  });
