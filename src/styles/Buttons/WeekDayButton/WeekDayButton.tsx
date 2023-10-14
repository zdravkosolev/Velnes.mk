import styled from "styled-components";
import { PHelpText, PnormalTextBold } from "../../Headlines/Headlines";
import { theme } from "../../themeStyles";

interface Props {
  day: string;
  date: number;
  type?: "inactive" | "default" | "selected";
  outSiteSetter: any;
  isSelected: number | undefined;
}

const WeekDayButton = ({
  day,
  date,
  type = "default",
  outSiteSetter,
  isSelected,
}: Props) => {
  let dayColor;
  let dateColor;
  let borderColor;
  let bgColor;
  if (type === "inactive") {
    dayColor = theme.colors.greys[600];
    dateColor = theme.colors.primary.black;
    borderColor = "transparent";
    bgColor = theme.colors.greys[300];
  } else if ((isSelected as any)?.date === date) {
    dayColor = theme.colors.primary.black;
    dateColor = theme.colors.primary.black;
    borderColor = "transparent";
    bgColor = theme.colors.secondary.orange;
  } else {
    dayColor = theme.colors.greys[700];
    dateColor = theme.colors.primary.black;
    borderColor = theme.colors.greys[700];
    bgColor = "white";
  }

  return (
    <WeekDayButtonContainer
      onClick={() => {
        if (type !== "inactive") {
          outSiteSetter({ date, day });
        }
      }}
      bgcolor={bgColor}
      bordercolor={borderColor}
    >
      <PHelpText color={dayColor}>{day}</PHelpText>
      <PnormalTextBold color={dateColor}>{date}</PnormalTextBold>
    </WeekDayButtonContainer>
  );
};

export default WeekDayButton;
const WeekDayButtonContainer = styled.div<any>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 64px;
  flex-shrink: 0;
  border-radius: 12px;
  border: 1px solid ${(props) => props.bordercolor};
  background: ${(props) => props.bgcolor};
`;
