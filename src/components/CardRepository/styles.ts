import styled, { css } from 'styled-components';

export const Card = styled.div`
  ${({ theme }) => css`
    background-color: white;
    width: 100%;
    max-width: 330px;
    height: 123px;
    padding: 30px;
    margin-top: 16px;
    gap: 5px;
    border-radius: 8px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;

    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

    a {
      text-decoration: none;
      color: ${theme.colors.gray};

      :hover {
        color: black;
      }
    }
  `}
`;

export const Title = styled.h3`
  ${() => css``}
`;
