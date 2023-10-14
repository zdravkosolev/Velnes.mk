import styled from "styled-components";
import DummyImg from "../../../images/DummyImages/61ed5f9426a5d60117060d9a6ea760a3.jpg";
import { H3Styled, Paragraph } from "../../../styles/Headlines/Headlines";
import { theme } from "../../../styles/themeStyles";
const BenefitsCard = ({
  headline,
  paragraph,
}: {
  headline: string;
  paragraph: string;
}) => {
  return (
    <BenefitsCardParent>
      <BenefitsCardImgDiv />
      <BenefitsDesc>
        <H3Styled color={theme.colors.primary.brown}>{headline}</H3Styled>
        <Paragraph color={theme.colors.primary.black}>{paragraph}</Paragraph>
      </BenefitsDesc>
    </BenefitsCardParent>
  );
};

export default BenefitsCard;
const BenefitsCardParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;
export const BenefitsCardImgDiv = styled.div`
  width: 342px;
  height: 235px;
  border-radius: 12px;
  background: url(${DummyImg}) 50% / contain no-repeat, lightgray;
  background-color: #fff;
  box-shadow: 0px 2px 18px 0px rgba(255, 141, 103, 0.2);
`;
const BenefitsDesc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
