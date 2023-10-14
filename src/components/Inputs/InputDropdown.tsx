import { useEffect, useState } from "react";
import { theme } from "../../styles/themeStyles";
import styled from "styled-components";
import DownSmallArrowIcon from "../../styles/Icons/Arrows/DownSmallArrowIcon";

interface Props {
  outSiteSetter?: any;
  options: any;
  placeholder?: string;
  InitialElement?: string;
}
const InputDropdown = ({
  outSiteSetter,
  options,
  placeholder,
  InitialElement,
}: Props) => {
  const [onFocus, setOnFocus] = useState(false);
  const [inputVal, setInputVal] = useState(InitialElement || "");

  let borderColor = onFocus ? theme.colors.primary.orange : "#dadee2";
  useEffect(() => {
    if (outSiteSetter) {
      outSiteSetter(inputVal);
    }
  }, [inputVal]);

  const chooseHandler = (choosed: string) => {
    setInputVal(choosed);
    setOnFocus(false);
  };
  return (
    <Container>
      <InputSecondaryContainer
        bordercolor={borderColor}
        onFocus={() => {
          setOnFocus(true);
        }}
      >
        <InputStyled
          value={inputVal}
          placeholder={placeholder}
          onChange={(e: any) => setInputVal(e.target.value)}
        />
        <DownSmallArrowIcon />
      </InputSecondaryContainer>
      {onFocus && (
        <InputSecondaryContainerResults>
          {InitialElement && (
            <SelectElement
              key={InitialElement}
              onClick={() => {
                chooseHandler(InitialElement);
              }}
            >
              {InitialElement}
            </SelectElement>
          )}
          {options.map((el: any) => (
            <SelectElement
              key={el}
              onClick={() => {
                chooseHandler(el);
              }}
            >
              {el}
            </SelectElement>
          ))}
        </InputSecondaryContainerResults>
      )}
    </Container>
  );
};
export default InputDropdown;
const Container = styled.div<any>`
  position: relative;
  width: 100%;
`;

const InputSecondaryContainer = styled.div<any>`
  display: flex;
  width: 100%;
  height: 60px;
  padding: 10px 8px 10px 14px;
  justify-content: space-between;
  flex-shrink: 0;
  align-items: center;
  border-radius: 8px;
  border: 1px solid ${(props) => props.bordercolor};
  background: #fcfeff;
`;
const InputStyled = styled.input<any>`
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
const InputSecondaryContainerResults = styled.div<any>`
  background: ${theme.colors.secondary.lightorange};
  padding: 20px;
  position: absolute;
  width: 100%;
  z-index: 200;
`;
const SelectElement = styled.p<any>`
  margin: 0;
  width: 100%;
  padding: 10px 20px;

  border-bottom: 1px solid ${theme.colors.secondary.orange};
  border-top: 1px solid ${theme.colors.secondary.orange};
  &:active {
    background: ${theme.colors.secondary.orange};
  }
`;
