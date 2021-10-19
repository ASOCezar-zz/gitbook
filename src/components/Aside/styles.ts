import styled, { css } from 'styled-components';

export const Container = styled.aside`
  ${() => css`
    grid-area: following;
    max-width: 360px;
    width: 100%;
    height: 100%;

    padding: 8px;
  `}
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: 17px;
  `};
`;

export const WrapperFollowers = styled.section`
  ${() => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding-top: 16px;
  `};
`;
