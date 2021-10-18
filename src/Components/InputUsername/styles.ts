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
  `}
`;
