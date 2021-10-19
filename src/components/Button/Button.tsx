import React from 'react';

import * as Styled from './styles';

type ButtonProps = {
  children: string;
};

export const Button = ({ children }: ButtonProps): JSX.Element => (
  <Styled.Btn type="submit">{children}</Styled.Btn>
);
