import styled, { css } from 'styled-components';

export const Link = styled.a`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    text-decoration: none;
    color: black;

    cursor: pointer;

    transition: background 0.2s linear;

    min-height: 44px;
    border-radius: 8px;

    :hover {
      background-color: ${theme.colors.lightGray};
    }
  `};
`;

export const Span = styled.span`
  ${() => css`
    font-size: 14px;
  `};
`;

export const Img = styled.img`
  ${() => css`
    width: 36px;
    height: 36px;

    border-radius: 50%;
  `};
`;
