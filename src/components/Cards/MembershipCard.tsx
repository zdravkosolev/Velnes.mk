import styled from "styled-components";
import {
  H4Styled,
  PHelpText,
  PnormalTextBold,
} from "../../styles/Headlines/Headlines";
import { theme } from "../../styles/themeStyles";
import TimeIcon from "../../styles/Icons/Rules/TimeIcon";
import LocationIcon from "../../styles/Icons/Common/LocationIcon";

const MembershipCard = () => {
  return (
    <MembershipCardContainer>
      <MembershipCardContainerInner>
        <MembershipCardContainerInnerUp>
          <MembershipCardContainerInnerUpLeft>
            <TimeIcon size={18} color={theme.colors.primary.orange} />
            <PHelpText color={theme.colors.primary.orange}>6 months</PHelpText>
          </MembershipCardContainerInnerUpLeft>
          <MembershipCardContainerInnerUpRight>
            <LocationIcon size={18} color={theme.colors.primary.orange} />
            <PHelpText color={theme.colors.primary.orange}>
              Hair and beauty salon Skopje
            </PHelpText>
          </MembershipCardContainerInnerUpRight>
        </MembershipCardContainerInnerUp>

        <H4Styled color={theme.colors.primary.brown}>
          Anti-stress Massage: 12 for the price of 10
        </H4Styled>
        <MembershipCardContainerInnerDown>
          <MembershipCardContainerInnerDownInner>
            <PHelpText>12 sessions</PHelpText> &#183;{" "}
            <PHelpText>1 service</PHelpText>
          </MembershipCardContainerInnerDownInner>
          <PnormalTextBold>EUR45</PnormalTextBold>
        </MembershipCardContainerInnerDown>
      </MembershipCardContainerInner>
    </MembershipCardContainer>
  );
};

export default MembershipCard;

const MembershipCardContainer = styled.div`
  display: flex;
  width: 100%;

  padding: 12px 16px 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 12px;
  background: #fff3f0;
`;
const MembershipCardContainerInner = styled.div`
  display: flex;
  width: 100%;
  height: 163px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
`;
const MembershipCardContainerInnerUp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
`;
const MembershipCardContainerInnerUpLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
const MembershipCardContainerInnerUpRight = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
`;
const MembershipCardContainerInnerDown = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  align-self: stretch;
`;

const MembershipCardContainerInnerDownInner = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
