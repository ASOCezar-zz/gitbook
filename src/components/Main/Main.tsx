import React, { useContext, useEffect, useState } from 'react';
import { Aside, MenuNav, Repositories } from '..';
import { UserContext } from '../../context/UserProvider/context';
import { loadRepositories } from '../../services/load-repositories';
import { IRepository } from '../../types/Repository';
import { useMediaQuery } from '../../utils/useMediaQuery';
import * as Styled from './styles';

type MainProps = {
  isSearching: boolean;
  searchValue: string;
};

export const Main = ({ isSearching, searchValue }: MainProps): JSX.Element => {
  const userContext = useContext(UserContext);
  const { user } = userContext;

  const mediaMedium = useMediaQuery('(min-width: 1085px)');

  const mediaSmall = useMediaQuery('(min-width: 885px)');

  const [repos, setRepos] = useState<IRepository[]>();
  const [filteredRepos, setFilteredRepos] = useState<IRepository[]>();

  useEffect(() => {
    fetchRepositories();
  }, [user, isSearching]);

  const fetchRepositories = async () => {
    const loadedRepositories = await loadRepositories(user.login);
    loadedRepositories && setRepos(loadedRepositories);
  };

  useEffect(() => {
    if (isSearching) {
      const searchedRepos = repos?.filter((repo) =>
        repo.name.toLowerCase().includes(searchValue.toLowerCase()),
      );
      setFilteredRepos(searchedRepos);
    } else {
      setFilteredRepos(repos);
    }
  }, [isSearching, searchValue, repos]);

  const renderRepositories = () => {
    return filteredRepos ? (
      <Repositories repos={filteredRepos} />
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
