import styled, { css } from 'styled-components';

export const List = styled.ul`
  ${() => css`
    display: flex;
    flex-direction: row;
    height: 100%;
  `}
`;
