import styled from "styled-components";
import LeftSmallArrowIcon from "../../styles/Icons/Arrows/LeftSmallArrowIcon";
import { H3Styled } from "../../styles/Headlines/Headlines";
import ShareIcon from "../../styles/Icons/Action/ShareIcon";
import FavoriteHeart from "../../styles/Icons/Heart/FavoriteHeart";
import { theme } from "../../styles/themeStyles";
import CloseIcon from "../../styles/Icons/Action/CloseIcon";
import { useNavigate } from "react-router";

const Titlebar = ({
  headline,
  icons = true,
  bg = theme.colors.secondary.lightorange,
  closeIcon = false,
}: {
  headline: string | undefined;
  icons?: boolean;
  bg?: string;
  closeIcon?: boolean;
}) => {
  const navigate = useNavigate();

  return (
    <TitlebarParent bg={bg}>
      <TitlebarParentInnerDiv>
        <div
          onClick={() => {
            navigate(-1);
          }}
        >
          <LeftSmallArrowIcon
            color={theme.colors.primary.brown}
            size={theme.spacings.XS * 2}
          />
        </div>
        <H3Styled color={theme.colors.primary.brown}>{headline}</H3Styled>
        <TitlebarParentInnerDivIconsDiv>
          {icons && (
            <TitlebarParentInnerDivIconsDiv>
              <ShareIcon color={theme.colors.primary.brown} />
            </TitlebarParentInnerDivIconsDiv>
          )}
          {icons && (
            <TitlebarParentInnerDivIconsDiv
              onClick={() => {
                navigate("/favorites");
              }}
            >
              <FavoriteHeart color={theme.colors.primary.brown} />
            </TitlebarParentInnerDivIconsDiv>
          )}
          {closeIcon && (
            <TitlebarParentInnerDivIconsDiv
              onClick={() => {
                navigate("/");
              }}
            >
              <CloseIcon size={theme.spacings.XS * 2} />
            </TitlebarParentInnerDivIconsDiv>
          )}
        </TitlebarParentInnerDivIconsDiv>
      </TitlebarParentInnerDiv>
    </TitlebarParent>
  );
};

export default Titlebar;
const TitlebarParent = styled.div<any>`
  min-width: 100%;
  height: 59px;
  background: ${(props) => props.bg};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TitlebarParentInnerDiv = styled.div`
  display: flex;
  width: 342px;
  justify-content: space-between;
  align-items: center;
`;
const TitlebarParentInnerDivIconsDiv = styled.div`
  display: flex;
  align-items: center;

  gap: 24px;
`;
