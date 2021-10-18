import styled, { css } from 'styled-components';

export const Form = styled.form`
  ${() => css`
    display: flex;
    flex-direction: column;
    width: 396px;
    padding: 24px 16px 16px 16px;
    background-color: #fff;

    border-radius: 8px;

    align-items: center;
    justify-content: space-around;

    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
  `}
`;

export const Title = styled.h2`
  ${() => css`
    font-size: 18px;
    line-height: 22px;
    color: '#1c1e21';
    font-weight: normal;
    margin-bottom: 16px;
  `}
`;
