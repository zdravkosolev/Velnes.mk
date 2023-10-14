import styled from "styled-components";
import { theme } from "../../styles/themeStyles";
import { useState } from "react";

const CheckboxRow = ({ text }: { text: string }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <CheckboxRowParent>
      <CheckboxRowLabel htmlFor={text}>{text}</CheckboxRowLabel>
      <CheckboxRowCheckboxDiv>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked((prev) => !prev)}
          id={text}
        />
      </CheckboxRowCheckboxDiv>
    </CheckboxRowParent>
  );
};

export default CheckboxRow;

export const CheckboxRowParent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const CheckboxRowLabel = styled.label`
  font-weight: ${theme.typography.linkTextLarge.fontWeight};
  font-size: ${theme.typography.linkTextLarge.fontSize}px;
`;
const CheckboxRowCheckboxDiv = styled.div``;
