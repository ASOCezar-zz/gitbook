import React from 'react';
import { IUser } from '../../types/User';
import * as Styled from './styles';

type FollowingItemProps = {
  following: IUser;
};

export const FollowingItem = ({
  following,
}: FollowingItemProps): JSX.Element => (
  <Styled.Container href={following.html_url} target="_blank">
    <Styled.Img src={following.avatar_url} />
    <Styled.Span>{following.login}</Styled.Span>
  </Styled.Container>
);
