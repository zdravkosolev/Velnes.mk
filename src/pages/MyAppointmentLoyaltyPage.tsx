import styled from "styled-components";
import Titlebar from "../components/Titlebar/Titlebar";
import { H2Styled, Paragraph } from "../styles/Headlines/Headlines";
import { theme } from "../styles/themeStyles";
import { PageContainerPrimary } from "../styles/Section/SectionStyled";

const MyAppointmentLoyaltyPage = () => {
  return (
    <>
      <Titlebar icons={false} headline="" bg="white" closeIcon={true} />

      <PageContainerPrimary gap={theme.spacings.M * 3}>
        <H2Styled color={theme.colors.primary.brown}>
          You have <SpanModified> 100 </SpanModified>loyalty points
        </H2Styled>

        <Paragraph>
          Loyalty points are accumulated by booking appointments with Velnes.
          You can use them to get a discount for future bookings{" "}
        </Paragraph>
      </PageContainerPrimary>
    </>
  );
};

export default MyAppointmentLoyaltyPage;

const SpanModified = styled.span`
  color: ${theme.colors.primary.orange};
`;
