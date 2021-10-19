import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${() => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    padding: 0;
    gap: 10px;
  `}
`;
