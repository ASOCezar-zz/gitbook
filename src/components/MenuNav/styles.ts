import styled, { css } from 'styled-components';

export const Container = styled.nav`
  ${() => css`
    grid-area: nav;
    max-width: 360px;
    width: 100%;
    margin-top: 16px;
    background-color: transparent;
    height: 100%;

    padding: 16px;

    gap: 50px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  `}
`;
