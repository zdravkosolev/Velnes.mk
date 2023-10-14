import styled from "styled-components";
import {
  PHelpText,
  PnormalTextRegular,
} from "../../styles/Headlines/Headlines";
import { theme } from "../../styles/themeStyles";
interface Props {
  placeholder: string;
  checkboxIcon?: boolean;
  results?: number;
}

const RatingFactor = ({
  placeholder,
  checkboxIcon = false,
  results = 4.9,
}: Props) => {
  return (
    <RatingFactorContainer>
      {checkboxIcon && <input type="checkbox" />}
      <PnormalTextRegularmodified>{placeholder}</PnormalTextRegularmodified>
      <RatingFactorProgressContainer>
        <ProgressBarPlaceholder>
          <ProgressBar width={+results * 20}></ProgressBar>
        </ProgressBarPlaceholder>
        <PHelpText style={{ paddingLeft: "10px" }}>{results}</PHelpText>
      </RatingFactorProgressContainer>
    </RatingFactorContainer>
  );
};

export default RatingFactor;

const RatingFactorContainer = styled.div`
  display: flex;
  width: 342px;
  justify-content: space-between;
  align-items: center;
`;
const RatingFactorProgressContainer = styled.div`
  display: flex;
  width: 235px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
`;

const ProgressBarPlaceholder = styled.div`
  width: 218px;
  height: 2.5px;
  flex-shrink: 0;
  background: ${theme.colors.secondary.orange};
`;
const ProgressBar = styled.div<any>`
  height: 100%;
  width: ${(props) => props.width}%;
  background: ${theme.colors.primary.orange};
`;
const PnormalTextRegularmodified = styled(PnormalTextRegular)`
  padding-right: 30px;
`;
