import { useState } from "react";
import styled from "styled-components";
import { theme } from "../../styles/themeStyles";
import DownSmallArrowIcon from "../../styles/Icons/Arrows/DownSmallArrowIcon";

const InputDefault = ({
  placeholder = "Search",
  icon = false,
  inputType,
}: {
  placeholder?: string;
  icon?: boolean;
  inputType: "text" | "number" | "date" | "email" | "phone";
}) => {
  const [onFocus, setOnFocus] = useState(false);

  let borderColor = onFocus ? theme.colors.primary.orange : "#dadee2";

  return (
    <InputDefaultContainer
      bordercolor={borderColor}
      onFocus={() => {
        setOnFocus((prev) => !prev);
      }}
      onBlur={() => {
        setOnFocus((prev) => !prev);
      }}
    >
      <InputStyled type={inputType} />
      <LabelStyled className="input-label">{placeholder}</LabelStyled>
      {icon && (
        <div style={{ marginLeft: "auto" }}>
          <DownSmallArrowIcon color={theme.colors.primary.black} />
        </div>
      )}
    </InputDefaultContainer>
  );
};

export default InputDefault;
const InputDefaultContainer = styled.div<any>`
  display: flex;
  width: 100%;
  height: 70px;
  padding: 10px 8px 10px 14px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  border: 1px solid ${(props) => props.bordercolor};
  border-radius: 8px;
  background: #fff;

  position: relative;
`;
const InputStyled = styled.input`
  font-size: 18px;
  width: 85%;
  height: 30px;
  border: none;

  box-sizing: border-box;
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
  &:is(:focus) + .input-label {
    transform: translate(10px, -15px) scale(0.8);
    color: black;
    padding-inline: 5px;
    background-color: white;
  }
  &:is(:focus) {
    outline-color: white;
  }
  position: absolute;
  bottom: 10px;
  left: 15px;
  z-index: 0;
`;
const LabelStyled = styled.label`
  position: absolute;
  top: 5px;
  left: -3px;
  transform: translate(20px, 0px);
  transition: transform 0.3s ease;
`;
