import React, { useContext } from 'react';
import { CardRepository } from '..';
import { UserContext } from '../../context/UserProvider/context';
import { IRepository } from '../../types/Repository';
import * as Styled from './styles';

type RepositoriesProps = {
  repos: IRepository[];
};

export const Repositories = ({ repos }: RepositoriesProps): JSX.Element => {
  const userContext = useContext(UserContext);
  const { user } = userContext;

  const renderRepository = (repository: IRepository) => (
    <CardRepository repository={repository} key={repository.id} />
  );

  return (
    <Styled.Container>
      <Styled.Present>
        <Styled.Img src={user.avatar_url} alt={`Foto de ${user.name}`} />
        <Styled.Span>{user.bio}</Styled.Span>
      </Styled.Present>
      {repos.map(renderRepository)}
    </Styled.Container>
  );
};
