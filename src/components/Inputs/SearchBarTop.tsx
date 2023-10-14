import styled from "styled-components";

import { theme } from "../../styles/themeStyles";

import { PHelpText, PnormalTextBold } from "../../styles/Headlines/Headlines";
import LeftArrowIcon from "../../styles/Icons/Arrows/LeftArrowIcon";
import SettingsIcon from "../../styles/Icons/SettingsIcon";
import { useNavigate } from "react-router";

interface Props {
  textUpper?: string;
  downText: string;
  filterHandler: () => void;
}

const SearchBarTop = ({
  textUpper = `Nails`,
  downText,
  filterHandler,
}: Props) => {
  const navigate = useNavigate();

  return (
    <InputContainer bg={theme.colors.secondary.grey}>
      <InputContainerInner>
        <IconPlaceholder
          onClick={() => {
            navigate(-1);
          }}
        >
          <LeftArrowIcon size={30} />
        </IconPlaceholder>
        <UpperTextPlaceholder>
          <PnormalTextBold style={{ textTransform: "capitalize" }}>
            {" "}
            {textUpper}
          </PnormalTextBold>
        </UpperTextPlaceholder>
        <DownTextPlaceholder>
          <PHelpText color={theme.colors.greys[700]}>{downText}</PHelpText>
        </DownTextPlaceholder>
      </InputContainerInner>
      <SettingsConainer onClick={filterHandler}>
        <SettingsIcon size={36} color="black" />
      </SettingsConainer>
    </InputContainer>
  );
};

export default SearchBarTop;

const InputContainer = styled.div<any>`
  position: relative;
  width: 100%;

  gap: 28px;
  height: 70px;
  display: flex;
  width: 100%;
  padding: 12px 12px 12px 20px;
  align-items: center;

  border-radius: 999999px;
  border: 0.5px solid ${theme.colors.secondary.lightgrey};
  background: ${(props) => props.bg};

  box-shadow: 0px 2px 18px 0px ${theme.colors.secondary.lightorange};
`;
const InputContainerInner = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

const IconPlaceholder = styled.span`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 8px;
`;
const UpperTextPlaceholder = styled.span`
  position: absolute;
  top: 50%;
  left: 70px;
  transform: translateY(-100%);
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${theme.colors.primary.black};
  p {
    margin: 0;
    font-size: ${theme.typography.normalTextBold.fontSize}px;
    font-weight: ${theme.typography.normalTextBold.fontWeight};
  }
`;
const DownTextPlaceholder = styled.span`
  position: absolute;
  top: 50%;
  left: 70px;
  display: flex;

  align-items: center;
  gap: 8px;
  color: ${theme.colors.greys[700]};
  p {
    margin: 0;
    font-size: ${theme.typography.helpText.fontSize}px;
    font-weight: ${theme.typography.helpText.fontWeight};
  }
`;

const SettingsConainer = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(-50%, -50%);
`;
