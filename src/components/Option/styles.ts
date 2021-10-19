import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    background-color: ${theme.colors.lightGray};
    opacity: 0.8;

    cursor: pointer;

    :hover {
      opacity: 1;
    }
  `}
`;
