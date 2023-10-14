import { useState } from "react";
import { theme } from "../../styles/themeStyles";
import styled from "styled-components";
import { PHelpText, Paragraph } from "../../styles/Headlines/Headlines";
import GoogleIcon from "../../styles/Icons/Socials/GoogleIcon";

interface Props {
  icon?: boolean;
  title: string;
  subTitle?: string;
  name: string;
}

const RadioPayment = ({ icon = false, subTitle, title, name }: Props) => {
  const [onFocus, setOnFocus] = useState(false);
  const [select, setSelect] = useState(true);

  const handleSelectChange = (event: any) => {
    const value = event.target.value;
    setSelect(value);
  };
  let borderColor = onFocus ? theme.colors.primary.orange : "#dadee2";

  return (
    <RadioPaymentContainer
      bordercolor={borderColor}
      onFocus={() => {
        setOnFocus((prev) => !prev);
      }}
      onBlur={() => {
        setOnFocus((prev) => !prev);
      }}
    >
      <RadioPaymentInnerLeft>
        <RadioPaymentInnerLeftInner>
          <RadioButton
            type="radio"
            name={name}
            value={title}
            onChange={(event) => handleSelectChange(event)}
            checked={select}
          />
          <RadioButtonLabel />
          <RadioPaymentInnerLeftInnerDivInnerDiv>
            <Paragraph>{title}</Paragraph>
            {subTitle && <PHelpText>{subTitle}</PHelpText>}
          </RadioPaymentInnerLeftInnerDivInnerDiv>
        </RadioPaymentInnerLeftInner>
      </RadioPaymentInnerLeft>
      <RadioPaymentInnerRight>
        {/* temporary */}
        {icon && (
          <>
            <GoogleIcon color="black" size={24} />
            <GoogleIcon color="black" size={24} />
          </>
        )}
      </RadioPaymentInnerRight>
    </RadioPaymentContainer>
  );
};

export default RadioPayment;
const RadioPaymentContainer = styled.div<any>`
  display: flex;
  padding: 16px;
  width: 100%;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  border-radius: 8px;
  border: 2px solid ${(props) => props.bordercolor};
`;
const RadioPaymentInnerLeft = styled.div<any>`
  display: flex;
  align-items: center;
  gap: 104px;
  flex: 1 0 0;
`;

const RadioPaymentInnerLeftInner = styled.div<any>`
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;
`;
const RadioPaymentInnerLeftInnerDivInnerDiv = styled.div<any>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const RadioPaymentInnerRight = styled.div<any>`
  display: flex;
  align-items: center;
  gap: 12px;
`;
const RadioButtonLabel = styled.label`
  position: absolute;
  top: 20%;
  left: 10px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  border: 1px solid #ccc;
  transition: background 0.3s, border 0.3s; /* Added transition */
`;

const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  width: 25px;
  height: 25px;
  margin-right: 10px;
  &:hover + ${RadioButtonLabel}, &:checked + ${RadioButtonLabel} {
    background: ${theme.colors.primary.orange};
    border: 1px solid ${theme.colors.primary.orange};
  }
  &:checked + ${RadioButtonLabel} {
    &::after {
      content: "";
      display: block;
      width: 7px;
      height: 7px;
      margin: 8px;
      background: white;
      border-radius: 50%;
    }
  }
`;
