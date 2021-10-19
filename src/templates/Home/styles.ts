import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.bg};

    width: 100%;
    height: 100vh;

    overflow-y: scroll;

    scroll-behavior: smooth;
  `}
`;
