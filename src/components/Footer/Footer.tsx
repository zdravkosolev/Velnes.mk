import styled from "styled-components";
import { theme } from "../../styles/themeStyles";
import { H3Styled, PnormalTextRegular } from "../../styles/Headlines/Headlines";
import FaceBookCircleIcon from "../../styles/Icons/Socials/FaceBookCircleIcon";
import InstagramAltIcon from "../../styles/Icons/Socials/InstagramAltIcon";
import TwitterXIcon from "../../styles/Icons/Socials/TwitterXIcon";
import LinkedinIcon from "../../styles/Icons/Socials/LinkedinIcon";

const Footer = () => {
  return (
    <footer style={{ width: "100%" }}>
      <FooterContainer>
        <FooterInnerUp>
          <FooterInnerUpLeft>
            <H3Styled color="white">About Velnes</H3Styled>
            <PnormalTextRegular color="white">
              Company values
            </PnormalTextRegular>
            <PnormalTextRegular color="white">Our team</PnormalTextRegular>
            <PnormalTextRegular color="white">Careers</PnormalTextRegular>
            <PnormalTextRegular color="white">Blog</PnormalTextRegular>
          </FooterInnerUpLeft>
          <FooterInnerUpRight>
            <H3Styled color="white">Legal</H3Styled>
            <PnormalTextRegular color="white">
              Privacy policy
            </PnormalTextRegular>
            <PnormalTextRegular color="white">Terms of use</PnormalTextRegular>
          </FooterInnerUpRight>
        </FooterInnerUp>
        <FooterInnerDown>
          <FooterInnerDownDiv>
            <H3Styled color="white">Social media</H3Styled>
            <FooterInnerDownDivIconDiv>
              <FaceBookCircleIcon color="white" size={24} />
              <InstagramAltIcon color="white" size={24} />
              <TwitterXIcon color="white" size={24} />
              <LinkedinIcon color="white" size={24} />
            </FooterInnerDownDivIconDiv>
          </FooterInnerDownDiv>
          <PnormalTextRegular color="white">
            © 2023 Velnes.mk
          </PnormalTextRegular>
        </FooterInnerDown>
      </FooterContainer>
    </footer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  width: 100%;
  height: 639px;

  background: ${theme.colors.primary.brown};
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
const FooterInnerUp = styled.div`
  display: flex;
  width: 342px;
  align-items: flex-start;
  gap: 90px;
`;
const FooterInnerUpLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 155px;
`;
const FooterInnerUpRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 91px;
`;
const FooterInnerDown = styled.div`
  display: flex;
  width: 342px;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
`;
const FooterInnerDownDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;
const FooterInnerDownDivIconDiv = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
`;
