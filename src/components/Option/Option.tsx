import React from 'react';
import * as Styled from './styles';

type OptionProps = {
  children: JSX.Element;
};

export const Option = ({ children }: OptionProps): JSX.Element => (
  <Styled.Wrapper>{children}</Styled.Wrapper>
);
