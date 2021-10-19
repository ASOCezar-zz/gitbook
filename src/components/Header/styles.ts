import styled, { css } from 'styled-components';

export const HeaderContainer = styled.header`
  ${() => css`
    display: flex;
    flex-direction: row;
    background-color: white;
    height: 56px;
    max-width: 100%;
    padding-inline: 16px;
    align-items: center;
    justify-content: space-between;

    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
  `}
`;
