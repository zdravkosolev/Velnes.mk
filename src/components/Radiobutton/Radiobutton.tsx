import styled from "styled-components";
import { theme } from "../../styles/themeStyles";
import { H4Styled, PnormalTextBold } from "../../styles/Headlines/Headlines";
interface Props {
  text: string;
  name: string;
  price?: number;
  outSideSetter: any;
  outSideState: string;
}
const RadioButtonComponent = ({
  text,
  name,
  price,
  outSideState,
  outSideSetter,
}: Props) => {
  const handleSelectChange = (text: string) => {
    outSideSetter(text);
  };

  return (
    <Wrapper>
      <Item>
        <RadioButton
          type="radio"
          name={name}
          value={text}
          checked={outSideState === text}
          onChange={() => handleSelectChange(text)}
        />
        <RadioButtonLabel />
        <H4Styled>{text}</H4Styled>
      </Item>
      {price && <PnormalTextBold>{price} EUR</PnormalTextBold>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  position: relative;
  box-sizing: border-box;
  border-radius: 2px;
`;

const RadioButtonLabel = styled.label`
  position: absolute;
  top: 25%;
  left: 4px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  border: 1px solid #ccc;
  transition: background 0.3s, border 0.3s;
`;

const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  width: 25px;
  height: 25px;
  margin-right: 10px;
  &:checked + ${RadioButtonLabel} {
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

export default RadioButtonComponent;
