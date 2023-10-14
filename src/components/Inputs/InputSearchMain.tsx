import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../styles/themeStyles";
import SearchIcon from "../../styles/Icons/Common/SearchIcon";

interface Props {
  placeholder?: string;
  inputVal: string;
  setInputVal: any;
}
const InputSearchMain = ({
  placeholder = "Search",
  inputVal,
  setInputVal,
}: Props) => {
  const [onFocus, setOnFocus] = useState(false);

  const focusHandler = () => {
    setOnFocus((prev) => !prev);
  };
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
  };
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("first");
  };

  return (
    <>
      <InputContainer
        style={
          !onFocus
            ? { border: "1px solid #BEC3C7" }
            : { border: "2px solid #FF8D67" }
        }
        onSubmit={submitHandler}
      >
        <SearchIcon color={theme.colors.primary.black} size={24} />
        <InputStyled
          type="text"
          value={inputVal}
          placeholder={placeholder}
          onChange={inputHandler}
          onFocus={focusHandler}
          onBlur={focusHandler}
        />
      </InputContainer>
    </>
  );
};

export const InputContainer = styled.form`
  display: flex;
  width: 314px;
  height: 62px;
  padding: 10px 8px 10px 16px;
  align-items: center;
  gap: 13px;
  flex-shrink: 0;
  border-radius: 12px;
`;

export const InputStyled = styled.input`
  width: 100%;
  border: none;
  height: 100%;
  outline: none;
  font-size: ${theme.typography.linkTextDefault.fontSize}px;
  font-weight: ${theme.typography.linkTextDefault.fontWeight};
  color: ${theme.colors.greys[700]};
  &:placeholder {
    font-size: ${theme.typography.linkTextDefault.fontSize}px;
    font-weight: ${theme.typography.linkTextDefault.fontWeight};
    color: ${theme.colors.greys[700]};
  }
  &::selection {
    color: ${theme.colors.primary.brown};
    background: ${theme.colors.secondary.orange};
  }
`;
export default InputSearchMain;
