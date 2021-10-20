import React from 'react';
import * as Styled from './styles';

type WrapperLogoSearchProps = {
  children: JSX.Element[];
};

export const WrapperLogoSearch = ({
  children,
}: WrapperLogoSearchProps): JSX.Element => (
  <Styled.Wrapper>{children}</Styled.Wrapper>
);
