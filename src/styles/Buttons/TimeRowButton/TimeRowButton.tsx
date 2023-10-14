import styled from "styled-components";
import { H4Styled, PHelpText } from "../../Headlines/Headlines";
import { theme } from "../../themeStyles";

interface Props {
  type?: "avaliable" | "waiting" | "selected";
  hour: string;
  outSiteSetter: any;
  isSelected: string;
}

const TimeRowButton = ({
  hour,
  type = "avaliable",
  outSiteSetter,
  isSelected,
}: Props) => {
  let hourColor;
  let bgColor;
  if (type !== "waiting") {
    if (isSelected === hour) {
      hourColor = theme.colors.primary.orange;
      bgColor = theme.colors.secondary.lightorange;
    } else {
      hourColor = theme.colors.primary.black;
      bgColor = "white";
    }
  }

  return (
    <ContainerTimeRowButton
      bgcolor={bgColor}
      onClick={() => {
        if (type !== "waiting") outSiteSetter(hour);
      }}
    >
      <H4Styled color={hourColor}>{hour}</H4Styled>
      {type === "waiting" && (
        <WaitingListContainer>
          <PHelpText>WAITING LIST</PHelpText>
        </WaitingListContainer>
      )}
    </ContainerTimeRowButton>
  );
};

export default TimeRowButton;
const ContainerTimeRowButton = styled.div<any>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 16px;
  align-items: center;
  gap: 8px;
  background: ${(props) => props.bgcolor};
`;
const WaitingListContainer = styled.div<any>`
  display: flex;
  padding: 3px 7px;
  align-items: center;
  gap: 10px;
  border-radius: 22px;
  background: #eff2f5;
`;
