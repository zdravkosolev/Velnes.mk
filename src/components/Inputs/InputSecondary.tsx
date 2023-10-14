import { useState } from "react";
import styled from "styled-components";
import SearchIcon from "../../styles/Icons/Common/SearchIcon";
import { theme } from "../../styles/themeStyles";

const InputSecondary = ({ outSideSetter }: { outSideSetter: any }) => {
  const [onFocus, setOnFocus] = useState(false);

  let borderColor = onFocus ? theme.colors.primary.orange : "#dadee2";

  return (
    <InputSecondaryContainer
      bordercolor={borderColor}
      onFocus={() => {
        setOnFocus((prev) => !prev);
      }}
      onBlur={() => {
        setOnFocus((prev) => !prev);
      }}
    >
      <SearchIcon color={theme.colors.primary.black} />
      <InputStyled
        placeholder="Search"
        onChange={(e) => {
          outSideSetter(e.target.value);
        }}
      />
    </InputSecondaryContainer>
  );
};

export default InputSecondary;
const InputSecondaryContainer = styled.div<any>`
  display: flex;
  width: 100%;
  height: 46px;
  padding: 14px 16px;
  align-items: center;
  gap: 9px;
  flex-shrink: 0;
  border-radius: 25px;
  border: 1px solid ${(props) => props.bordercolor};
  background: #fcfeff;
`;
const InputStyled = styled.input`
  font-size: 18px;
  width: 100%;
  height: 100%;
  border: none;
  background: #fcfeff;
  outline: none;
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
