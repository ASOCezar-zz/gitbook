import styled, { css } from 'styled-components';

export const Btn = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.blue};
    border: none;
    border-radius: 6px;
    margin-top: 12px;
    opacity: 0.9;

    width: 100%;
    height: 48px;

    color: white;
    font-weight: bold;
    font-size: 20px;

    padding: 0 16px;

    cursor: pointer;
    transition: opacity 0.3s linear;

    &:hover {
      opacity: 1;
    }
  `}
`;
