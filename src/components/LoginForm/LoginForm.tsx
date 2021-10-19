import React from 'react';
import * as Styled from './styles';

type LoginFormProps = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  children: JSX.Element[];
};

export const LoginForm = ({
  handleSubmit,
  children,
}: LoginFormProps): JSX.Element => (
  <Styled.Form onSubmit={(e) => handleSubmit(e)}>
    <Styled.Title> Entrar no Gitbook </Styled.Title>
    {children}
  </Styled.Form>
);
