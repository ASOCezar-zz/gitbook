import React from 'react';
import { IRepository } from '../../types/Repository';
import * as Styled from './styles';

type CardRepositoryProps = {
  repository: IRepository;
};

export const CardRepository = ({ repository }: CardRepositoryProps) => (
  <Styled.Card>
    <a href={`https://github.com/${repository.full_name}`}>
      <Styled.Title>{repository.name}</Styled.Title>
    </a>
  </Styled.Card>
);
