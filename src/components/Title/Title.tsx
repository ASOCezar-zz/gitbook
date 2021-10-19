import React from 'react';
import * as Styled from './styles';

type TitleProps = {
  children: string;
};

export const Title = ({ children }: TitleProps): JSX.Element => (
  <Styled.Wrapper>{children}</Styled.Wrapper>
);
