import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${() => css`
    display: flex;
    flex-direction: row;

    gap: 10px;
  `}
`;
