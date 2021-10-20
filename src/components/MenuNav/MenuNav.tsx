import React from 'react';
import * as Styled from './styles';

import followersImg from '../../assets/followers.png';
import favoritesImg from '../../assets/favorites.png';
import logoutImg from '../../assets/logout.png';
import { MenuItem } from '..';
import { useHistory } from 'react-router';
import { IUser } from '../../types/User';

type MenuNavProps = {
  user: IUser;
  userImg: string;
};

export const MenuNav = ({ user, userImg }: MenuNavProps): JSX.Element => {
  const history = useHistory();

  const handleLogout = () => {
    window.localStorage.removeItem('gitbook-user');
    history.push('/login');
  };

  return (
    <Styled.Container>
      <MenuItem src={userImg} text={user.name} target={user.html_url} />
      <MenuItem src={followersImg} text={`Seguidores (${user.followers})`} />
      <MenuItem src={favoritesImg} text="Favoritos" />
      <MenuItem src={logoutImg} text="Sair" onClick={handleLogout} />
    </Styled.Container>
  );
};
