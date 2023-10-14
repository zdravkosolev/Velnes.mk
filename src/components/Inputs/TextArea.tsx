import { useState } from "react";
import styled from "styled-components";

import { theme } from "../../styles/themeStyles";

const TextArea = ({
  placeholder = "Write a comment here",
}: {
  placeholder?: string;
}) => {
  const [onFocus, setOnFocus] = useState(false);

  let borderColor = onFocus ? theme.colors.primary.orange : "#dadee2";

  return (
    <TextAreaContainer
      bordercolor={borderColor}
      onFocus={() => {
        setOnFocus((prev) => !prev);
      }}
      onBlur={() => {
        setOnFocus((prev) => !prev);
      }}
    >
      <TextAreaStyled placeholder={placeholder} />
    </TextAreaContainer>
  );
};

export default TextArea;
const TextAreaContainer = styled.div<any>`
  display: flex;
  width: 100%;
  height: 250px;
  padding: 10px 8px 10px 14px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  border: 1px solid ${(props) => props.bordercolor};
  border-radius: 8px;
  background: #fff;
`;
const TextAreaStyled = styled.textarea`
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
