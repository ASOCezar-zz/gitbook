import { IUser } from '../types/User';

export const loadApi = async (username: string): Promise<IUser | null> => {
  return fetch(`https://api.github.com/users/${username}`)
    .then((res) => {
      return res.status === 404 ? null : res.json();
    })
    .catch((err) => err.message);
};
