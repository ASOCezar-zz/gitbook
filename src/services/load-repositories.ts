import { IRepository } from '../types/Repository';

export const loadRepositories = async (
  username: string,
): Promise<IRepository[] | null> => {
  return fetch(`https://api.github.com/users/${username}/repos`)
    .then((res) => {
      return res.status === 404 ? null : res.json();
    })
    .catch((err) => console.error(err.message));
};
