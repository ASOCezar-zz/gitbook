import React from 'react';
import * as Styled from './styles';

type Option = {
  children: JSX.Element;
};

export const Option = ({ children }: Option) => (
  <Styled.Wrapper>{children}</Styled.Wrapper>
);
