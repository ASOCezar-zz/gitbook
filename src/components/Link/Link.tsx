import React from 'react';
import * as Styled from './styles';

type LinkProps = {
  children: JSX.Element;
  selected?: boolean;
};

export const Link = ({
  children,
  selected = false,
}: LinkProps): JSX.Element => (
  <Styled.Item selected={selected}>{children}</Styled.Item>
);
