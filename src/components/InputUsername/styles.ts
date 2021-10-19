import styled, { css } from 'styled-components';

export const Input = styled.input`
  ${({ theme }) => css`
    height: 52px;
    width: 100%;

    font-size: 17px;

    border: 1px solid ${theme.colors.lightGray};
    border-radius: 6px;

    padding: 14px 16px;

    outline: none;

    &::placeholder {
      color: ${theme.colors.lightGray};
    }

    &.error {
      border: 1px solid ${theme.colors.error};
    }

    &.error + ::after {
      content: 'O usuário que você inseriu não está vinculado a nenhuma conta, verifique e tente novamente';
      color: ${theme.colors.error};
      text-align: left;
      font-size: 13px;
      position: relative;
    }
  `}
`;
