import styled from "styled-components";
import { IconLabelButton } from "../../styles/Buttons/Buttons";
import { theme } from "../../styles/themeStyles";
import {
  ButtonsTypo,
  PHelpText,
  PnormalTextBold,
} from "../../styles/Headlines/Headlines";

interface Props {
  firstText: string;
  secondText: string;
  price: number;
  disabledButton?: boolean;
  nextHandler: () => void;
}

const DoubleLeftCta = ({
  firstText,
  secondText,
  disabledButton = false,
  price,
  nextHandler,
}: Props) => {
  let bgButton = disabledButton
    ? theme.colors.greys[300]
    : theme.colors.primary.orange;
  let colorButton = disabledButton ? theme.colors.greys[700] : "white";
  return (
    <DoubleLeftCtaContainer>
      <div>
        <PHelpText color={theme.colors.greys[700]}>{firstText}</PHelpText>
        <PnormalTextBold color={theme.colors.primary.black}>
          {price} EUR
        </PnormalTextBold>
      </div>

      <IconLabelButton
        bg={bgButton}
        disabled={disabledButton}
        onClick={nextHandler}
      >
        <ButtonsTypo color={colorButton}>{secondText}</ButtonsTypo>
      </IconLabelButton>
    </DoubleLeftCtaContainer>
  );
};

export default DoubleLeftCta;

const DoubleLeftCtaContainer = styled.div`
  display: flex;
  padding: 16px 24px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-top: 1px solid #dadee2;
  background: #fff;
`;
