import styled, { css } from 'styled-components';

export const Container = styled.main`
  ${() => css`
    display: grid;
    grid-template-areas: 'nav ... repositories ... following';
    width: 100%;
    height: 100%;

    justify-items: center;
  `}
`;
