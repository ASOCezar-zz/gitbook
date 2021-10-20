import * as Styled from './styles';
import React, { useRef } from 'react';
import { useHistory } from 'react-router';
import { Button, InputUsername, LoginForm, Title } from '../../components';
import { loadApi } from '../../services/load-api';

const Login = (): JSX.Element => {
  document.title = 'Gitbook | Login';

  const usernameInput = useRef<HTMLInputElement>(null);
  const history = useHistory();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (usernameInput.current) {
      usernameInput.current.classList.remove('error');
      const result = await loadApi(usernameInput.current.value);
      result?.login &&
        window.localStorage.setItem('gitbook-user', result.login);
      result?.login
        ? history.push('/')
        : usernameInput.current.classList.add('error');
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
