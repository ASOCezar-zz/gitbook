import React from 'react';
import * as Styled from './styles';

type WrapperLogoSearchProps = {
  children: JSX.Element[];
};

export const WrapperLogoSearch = ({ children }: WrapperLogoSearchProps) => (
  <Styled.Wrapper>{children}</Styled.Wrapper>
);
