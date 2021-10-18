import React from 'react';

import * as Styled from './styles';

type InputUsernameProps = {
  usernameInput: React.RefObject<HTMLInputElement>;
};

export const InputUsername = ({ usernameInput }: InputUsernameProps) => (
  <Styled.Input
    type="text"
    ref={usernameInput}
    placeholder="Username"
    required
  />
);
