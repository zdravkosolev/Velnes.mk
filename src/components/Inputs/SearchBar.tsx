import styled from "styled-components";
import { theme } from "../../styles/themeStyles";
import SearchIcon from "../../styles/Icons/Common/SearchIcon";
import { PHelpText, PnormalTextBold } from "../../styles/Headlines/Headlines";
import { useNavigate } from "react-router";

const SearchBar = ({ textUpper = `Any treatment or venue` }: any) => {
  const navigate = useNavigate();

  return (
    <InputContainer
      onClick={() => {
        navigate("/search-treatment");
      }}
    >
      <InputContainerInner>
        <IconPlaceholder>
          <SearchIcon size={18} />
        </IconPlaceholder>
        <UpperTextPlaceholder>
          <PnormalTextBold> {textUpper}</PnormalTextBold>
        </UpperTextPlaceholder>
        <DownTextPlaceholder>
          <PHelpText color={theme.colors.greys[700]}>
            Anywhere . Any date . Any time
          </PHelpText>
        </DownTextPlaceholder>
      </InputContainerInner>
    </InputContainer>
  );
};

export default SearchBar;

const InputContainer = styled.div`
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
  background: #fff;

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
