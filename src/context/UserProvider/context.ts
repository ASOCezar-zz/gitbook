import { createContext, Dispatch, SetStateAction } from 'react';
import { IUser } from '../../types/User';
import userMock from '../../templates/Login/mock';

type UserContextProps = {
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>;
};

export const UserContext = createContext<UserContextProps>({
  user: userMock,
  setUser: () => userMock,
});
