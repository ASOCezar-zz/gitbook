import React, { useContext, useEffect, useState } from 'react';
import { FollowingItem } from '..';
import { UserContext } from '../../context/UserProvider/context';
import { loadFollowings } from '../../services/load-followings';
import { IUser } from '../../types/User';
import * as Styled from './styles';

export const Aside = (): JSX.Element => {
  const userContext = useContext(UserContext);
  const { user } = userContext;

  const [userFollowing, setUserFollowing] = useState<IUser[]>();

  useEffect(() => {
    getFollowings();
  }, [user]);

  const getFollowings = async () => {
    const loadedFollowings = await loadFollowings(user.login);
    loadedFollowings && setUserFollowing(loadedFollowings);
  };

  const renderFollowings = (following: IUser) => (
    <FollowingItem following={following} />
  );

  return (
    <Styled.Container>
      <Styled.Title>Seguidores ({userFollowing?.length})</Styled.Title>
      <Styled.WrapperFollowers>
        {userFollowing?.map(renderFollowings)}
      </Styled.WrapperFollowers>
    </Styled.Container>
  );
};
