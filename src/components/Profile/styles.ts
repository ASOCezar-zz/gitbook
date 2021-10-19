import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: none;
    @media (min-width: 1245px) {
      display: flex;
      flex-direction: row;
      gap: 5px;
      max-width: 145px;
      height: 100%;
      align-items: center;

      border-radius: 18px;

      transition: background 0.3s linear;
      cursor: pointer;
      padding: 4px 12px;

      :hover {
        background-color: ${theme.colors.lightGray};
      }
    }
  `}
`;

export const Img = styled.img`
  ${() => css`
    width: 30px;
    height: 30px;
    border-radius: 50%;
  `}
`;

export const Name = styled.h2`
  ${() => css`
    font-weight: bold;
    font-size: 15px;
  `}
`;
