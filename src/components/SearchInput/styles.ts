import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    background-color: ${theme.colors.bg};
    width: auto;
    height: 40px;
    align-items: center;
    gap: 10px;
    border-radius: 50px;
    padding: 7px 7px 7px 7px;
    cursor: pointer;

    @media (min-width: 1245px) {
      padding: 7px 16px 9px 10px;
      cursor: text;
    }
  `}
`;

type InputProps = {
  focus: boolean;
};

export const Input = styled.input<InputProps>`
  ${({ focus }) => css`
    display: ${focus ? 'block' : 'none'};

    &:focus {
      background-color: transparent;
      flex: 2;
      height: 100%;
      border: none;
      outline: none;

      &::placeholder {
        font-size: 14px;
      }
    }

    @media (min-width: 1245px) {
      display: block;
      background-color: transparent;
      flex: 2;
      height: 100%;
      border: none;
      outline: none;

      &::placeholder {
        font-size: 14px;
      }
    }
  `}
`;
