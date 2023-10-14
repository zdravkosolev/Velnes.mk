import styled from "styled-components";
import Titlebar from "../components/Titlebar/Titlebar";
import { ButtonsTypo, H2Styled } from "../styles/Headlines/Headlines";
import { theme } from "../styles/themeStyles";
import { PrimaryButtonFull } from "../styles/Buttons/Buttons";
import MembershipCard from "../components/Cards/MembershipCard";
import { PageContainerPrimary } from "../styles/Section/SectionStyled";

const MyMembershipsActivityPage = () => {
  return (
    <>
      <Titlebar icons={false} headline="" bg="white" closeIcon={true} />

      <PageContainerPrimary gap={theme.spacings.L * 2}>
        <H2Styled color={theme.colors.primary.brown}>
          Active memberships
        </H2Styled>

        <MembershipCard />
        <H2Styled color={theme.colors.primary.brown}>Past memberships</H2Styled>
        <PastMembershipContainer>
          <MembershipCard />
        </PastMembershipContainer>

        <PrimaryButtonFull bg={"white"} outline={theme.colors.primary.orange}>
          <ButtonsTypo color={theme.colors.primary.brown}>Renew</ButtonsTypo>
        </PrimaryButtonFull>
      </PageContainerPrimary>
    </>
  );
};

export default MyMembershipsActivityPage;

const PastMembershipContainer = styled.div`
  opacity: 0.5;
`;
