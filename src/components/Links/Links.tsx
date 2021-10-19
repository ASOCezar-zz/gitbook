import React from 'react';
import * as Styled from './styles';

type LinksProps = {
  children: JSX.Element[] | JSX.Element;
};

export const Links = ({ children }: LinksProps): JSX.Element => (
  <Styled.List>{children}</Styled.List>
);
