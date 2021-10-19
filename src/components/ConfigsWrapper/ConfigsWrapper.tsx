import React from 'react';
import * as Styled from './styles';

type ConfigsWrapperProps = {
  children: JSX.Element[];
};

export const ConfigsWrapper = ({
  children,
}: ConfigsWrapperProps): JSX.Element => (
  <Styled.Wrapper>{children}</Styled.Wrapper>
);
