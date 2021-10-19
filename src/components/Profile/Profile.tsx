import React from 'react';
import * as Styled from './styles';

type ProfileProps = {
  image: string;
  name: string;
};

export const Profile = ({ image, name }: ProfileProps): JSX.Element => (
  <Styled.Container>
    <Styled.Img src={image} />
    <Styled.Name>{name}</Styled.Name>
  </Styled.Container>
);
