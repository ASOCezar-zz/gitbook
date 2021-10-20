import React from 'react';
import { useState } from 'react';
import userMock from '../../templates/Login/mock';
import { IUser } from '../../types/User';
import { UserContext } from './context';

type UserProviderProps = {
  children: React.ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps): JSX.Element => {
  const [user, setUser] = useState<IUser>(userMock);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
