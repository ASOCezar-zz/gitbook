import styled, { css } from 'styled-components';

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

    :hover {
      background-color: ${theme.colors.lightGray};
    }

    ${selected &&
    css`
      border-bottom: 3px solid ${theme.colors.blue};
    `};
  `}
`;
