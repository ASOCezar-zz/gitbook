import React from 'react';
import * as Styled from './styles';

type MenuItemProps = {
  src: string;
  text: string;
  target?: string;
  onClick?: () => void;
};

export const MenuItem = ({ src, text, onClick, target }: MenuItemProps) => (
  <Styled.Link href={target} onClick={onClick} target="_blank">
    <Styled.Img src={src} />
    <Styled.Span>{text}</Styled.Span>
  </Styled.Link>
);
