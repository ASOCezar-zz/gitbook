import React, { Dispatch, SetStateAction, useRef } from 'react';
import * as Styled from './styles';

import searchImg from '../../assets/search.svg';

type SearchInputProps = {
  focus: boolean;
  setFocus: Dispatch<SetStateAction<boolean>>;
};

export const SearchInput = ({ focus, setFocus }: SearchInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Styled.Wrapper
      onClick={() => {
        setFocus(true);
      }}
      onBlur={() => setFocus(false)}
    >
      <img
        src={searchImg}
        alt="Search Icon"
        width="20px"
        height="20px"
        onClick={() => inputRef.current && inputRef.current.focus()}
      />
      <Styled.Input
        ref={inputRef}
        focus={focus}
        type="text"
        placeholder="Pesquisar no Gitbook"
      />
    </Styled.Wrapper>
  );
};
