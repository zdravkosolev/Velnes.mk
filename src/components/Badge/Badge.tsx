import styled from "styled-components";
import { WarningDiv } from "../../pages/ReviewAndConfirmPage";
import { PHelpText } from "../../styles/Headlines/Headlines";
import { theme } from "../../styles/themeStyles";

const Badge = ({
  color = theme.colors.primary.orange,
  text,
}: {
  color?: string;
  text: string;
}) => {
  return (
    <WarningDivModified>
      <PHelpText color={color}>{text}</PHelpText>
    </WarningDivModified>
  );
};

export default Badge;
const WarningDivModified = styled(WarningDiv)`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 23px;
  background: #fff3f0;
`;
