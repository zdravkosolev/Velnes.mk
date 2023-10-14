import styled from "styled-components";
import Titlebar from "../components/Titlebar/Titlebar";
import SearchCta from "../components/BottomCta/SearchCta";
import { H2Styled, Paragraph } from "../styles/Headlines/Headlines";
import { theme } from "../styles/themeStyles";
import {
  ContainerDirColAlignStart,
  PageContainerPrimary,
} from "../styles/Section/SectionStyled";
import PaymentCells from "../components/Inputs/PaymentCells";

const ProfileAddNewCardPage = () => {
  return (
    <>
      <Titlebar icons={false} headline="" bg="white" />
      <PageContainerPrimary gap={theme.spacings.XL}>
        <ContainerDirColAlignStart gap={theme.spacings.XS}>
          <H2Styled color={theme.colors.primary.brown}>Add new card</H2Styled>
          <Paragraph>
            Securely save your card details for hassle-free payments.
          </Paragraph>
        </ContainerDirColAlignStart>
        <PaymentCells
          fPlaceholder="Card Number"
          sPlaceholder="Expiration"
          tPlaceholder="CVV"
        />
      </PageContainerPrimary>
      <BottomCtaDiv>
        <SearchCta
          firstText="Skip"
          secondText="Add"
          nextHandler={() => {
            console.log("Add");
          }}
        />
      </BottomCtaDiv>
    </>
  );
};

export default ProfileAddNewCardPage;

const BottomCtaDiv = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 1000;
`;
