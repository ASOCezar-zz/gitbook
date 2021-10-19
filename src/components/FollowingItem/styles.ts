import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    display: flex;
    text-decoration: none;
    flex-direction: row;
    inset-inline-end: 0;

    width: 100%;
    height: 52px;

    align-items: center;
    justify-content: flex-start;
    gap: 10px;

    cursor: pointer;

    :hover {
      background-color: ${theme.colors.lightGray};
    }
  `}
`;

export const Img = styled.img`
  ${() => css`
    width: 36px;
    height: 36px;

    border-radius: 50%;
  `}
`;

export const Span = styled.span`
  ${() => css`
    color: black;
  `}
`;
