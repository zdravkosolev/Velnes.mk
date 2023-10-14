import styled from "styled-components";
import { PnormalTextRegular } from "../../styles/Headlines/Headlines";

const OpeningHours = ({
  firstText,
  secondText,
  color = "#0D0D0D",
}: {
  firstText: string;
  secondText: string;
  color?: string;
}) => {
  return (
    <OpeningHoursDiv>
      <PnormalTextRegular color={color}>{firstText}</PnormalTextRegular>
      <PnormalTextRegular color={color}>{secondText}</PnormalTextRegular>
    </OpeningHoursDiv>
  );
};

export default OpeningHours;

const OpeningHoursDiv = styled.div`
  display: flex;
  width: 342px;
  justify-content: space-between;
  align-items: flex-start;
`;
