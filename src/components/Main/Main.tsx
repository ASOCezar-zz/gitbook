import React, { useContext, useEffect, useState } from 'react';
import { Aside, MenuNav, Repositories } from '..';
import { UserContext } from '../../context/UserProvider/context';
import { loadRepositories } from '../../services/load-repositories';
import { IRepository } from '../../types/Repository';
import { useMediaQuery } from '../../utils/useMediaQuery';
import * as Styled from './styles';

export const Main = () => {
  const userContext = useContext(UserContext);
  const { user } = userContext;

  const mediaMedium = useMediaQuery('(min-width: 1085px)');

  const mediaSmall = useMediaQuery('(min-width: 885px)');

  const [repos, setRepos] = useState<IRepository[]>();

  useEffect(() => {
    fetchRepositories();
  }, [user]);

  const fetchRepositories = async () => {
    const loadedRepositories = await loadRepositories(user.login);
    loadedRepositories && setRepos(loadedRepositories);
  };

  const renderRepositories = () => {
    return repos ? (
      <Repositories repos={repos} />
    ) : (
      <div> Você ainda não possui repositórios criados </div>
    );
  };

  const renderNav = () =>
    mediaMedium && <MenuNav user={user} userImg={user.avatar_url} />;

  const renderAside = () => mediaSmall && <Aside />;

  return (
    <Styled.Container>
      {renderNav()}
      {renderRepositories()}
      {renderAside()}
    </Styled.Container>
  );
};
