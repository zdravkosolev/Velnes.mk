import { useState } from "react";
import styled from "styled-components";

import { theme } from "../../styles/themeStyles";
import { PError } from "../../styles/Headlines/Headlines";
import InfoIcon from "../../styles/Icons/Common/InfoIcon";
interface Props {
  fPlaceholder: string;
  sPlaceholder: string;
  tPlaceholder: string;
}
const PaymentCells = ({ fPlaceholder, sPlaceholder, tPlaceholder }: Props) => {
  const [fOnFocus, setFOnFocus] = useState(false);
  const [sOnFocus, setSOnFocus] = useState(false);
  const [tOnFocus, setTOnFocus] = useState(false);

  let borderColorF = fOnFocus ? theme.colors.primary.orange : "white";
  let borderColorS = sOnFocus ? theme.colors.primary.orange : "white";
  let borderColorT = tOnFocus ? theme.colors.primary.orange : "white";

  return (
    <PaymentCellsContainer>
      <ContainerGroup>
        <InputStyled
          type="number"
          placeholder={fPlaceholder}
          bordercolor={borderColorF}
          onFocus={() => {
            setFOnFocus((prev) => !prev);
          }}
          onBlur={() => {
            setFOnFocus((prev) => !prev);
          }}
        />
        <ContainerGroupInner>
          <InputStyled
            type="number"
            placeholder={sPlaceholder}
            bordercolor={borderColorS}
            onFocus={() => {
              setSOnFocus((prev) => !prev);
            }}
            onBlur={() => {
              setSOnFocus((prev) => !prev);
            }}
          />
          <InputStyled
            type="number"
            placeholder={tPlaceholder}
            bordercolor={borderColorT}
            onFocus={() => {
              setTOnFocus((prev) => !prev);
            }}
            onBlur={() => {
              setTOnFocus((prev) => !prev);
            }}
          />
        </ContainerGroupInner>
      </ContainerGroup>
      <ContainerError>
        <InfoIcon size={12} color={theme.colors.primary.orange} />
        <PError color={theme.colors.primary.orange}>
          Check your card number
        </PError>
      </ContainerError>
    </PaymentCellsContainer>
  );
};

export default PaymentCells;
const PaymentCellsContainer = styled.div<any>`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  border-radius: 8px 8px;
`;
const InputStyled = styled.input<any>`
  display: flex;
  width: 100%;
  height: 60px;
  font-size: 16px;
  border-radius: 8px 8px;
  border: 1px solid ${(props) => props.bordercolor};
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
const ContainerGroup = styled.div<any>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 8px 8px;
  border: 1px solid #bec2c7;
`;
const ContainerGroupInner = styled.div<any>`
  display: flex;
  width: 100%;
  padding-left: 0px;
  align-items: center;
`;
const ContainerError = styled.div<any>`
  display: flex;
  width: 100%;

  padding-left: 0px;
  align-items: center;
  gap: 8px;
`;
