import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${() => css`
    grid-area: repositories;
    width: 100%;
    max-width: 680px;
    gap: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  `}
`;

export const Present = styled.form`
  ${() => css`
    background-color: white;
    width: 100%;
    height: 123px;
    padding: 12px;
    margin-top: 16px;
    gap: 5px;
    border-radius: 8px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  `}
`;

export const Img = styled.img`
  width: 40px;
  height: 40px;

  border-radius: 50%;
`;

export const Span = styled.span`
  ${() => css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    border: none;
    color: black;

    padding: 12px;
  `}
`;
