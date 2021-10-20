import { IUser } from '../types/User';

export const loadFollowings = async (
  username: string,
): Promise<IUser[] | null> => {
  return fetch(`https://api.github.com/users/${username}/following`)
    .then((res) => {
      return res.status === 404 ? null : res.json();
    })
    .catch((err) => err.message);
};
