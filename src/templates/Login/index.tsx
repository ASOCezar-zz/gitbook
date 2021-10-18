import * as Styled from './styles';
import React, { useRef } from 'react';
import { useHistory } from 'react-router';
import { Button, InputUsername, LoginForm, Title } from '../../Components';
import { loadApi } from '../../services/load-api';

const Login = (): JSX.Element => {
  const usernameInput = useRef<HTMLInputElement>(null);
  const history = useHistory();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (usernameInput.current) {
      const result = await loadApi(usernameInput.current.value);
      result?.login && history.push('/');
    }
  };

  return (
    <Styled.Container>
      <Title>gitbook</Title>
      <LoginForm handleSubmit={handleSubmit}>
        <InputUsername usernameInput={usernameInput} />
        <Button>Entrar</Button>
      </LoginForm>
    </Styled.Container>
  );
};

export default Login;
