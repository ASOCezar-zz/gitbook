import styled, { css } from 'styled-components';

import { Container } from '../MenuNav/styles';

type ItemProps = {
  selected: boolean;
};

export const Item = styled.li<ItemProps>`
  ${({ theme, selected }) => css`
    list-style: none;
    cursor: pointer;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: background 0.3s linear;
    cursor: pointer;

    > ${Container} {
      position: absolute;
      width: 100%;
      max-width: 100vw;
      height: 100vh;
      inset-inline: 0;
      inset-block: 42px;
      background-color: white;
      padding: 40px;
    }

    :hover {
      background-color: ${theme.colors.lightGray};
    }

    ${selected &&
    css`
      border-bottom: 3px solid ${theme.colors.blue};
    `};
  `}
`;
