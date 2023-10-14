import styled, { css } from "styled-components";
import Titlebar from "../components/Titlebar/Titlebar";
import {
  AlinkTextLarge,
  ButtonsTypo,
  H2Styled,
  H4Styled,
  Paragraph,
} from "../styles/Headlines/Headlines";
import { theme } from "../styles/themeStyles";
import DummyImg from "../images/DummyImages/fb120378836111a07a5300c568dee5c5.png";
import {
  ContainerDirColAlignStart,
  ContainerInlineFDirColAlignStart,
  ContainerJSpaceBetweenACenter,
  PageContainerPrimary,
} from "../styles/Section/SectionStyled";
import { ALink, PrimaryButton } from "../styles/Buttons/Buttons";
import { ReactDimmer } from "react-dimmer";
import { useState } from "react";
import SearchCta from "../components/BottomCta/SearchCta";
import { useNavigate } from "react-router";
const ViewProfilePage = () => {
  const [isModalDelete, setIsModalDelete] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Titlebar icons={false} headline="" bg="white" closeIcon={true} />

      <PageContainerPrimary gap={theme.spacings.L * 2}>
        <ViewProfileImgDiv />
        <ContainerJSpaceBetweenACenter>
          <H2Styled color={theme.colors.primary.brown}>Basic info</H2Styled>
          <ALink
            color={theme.colors.primary.orange}
            onClick={() => {
              navigate("/profile/profile-edit");
            }}
          >
            Edit
          </ALink>
        </ContainerJSpaceBetweenACenter>
        {/*  */}
        <ContainerDirColAlignStart gap={theme.spacings.M}>
          <ContainerInlineFDirColAlignStart gap={theme.spacings.XXS}>
            <H4Styled>First name</H4Styled>
            <AlinkTextLarge color={theme.colors.primary.black}>
              Katerina
            </AlinkTextLarge>
          </ContainerInlineFDirColAlignStart>
          <ContainerInlineFDirColAlignStart gap={theme.spacings.XXS}>
            <H4Styled>Last name</H4Styled>
            <AlinkTextLarge color={theme.colors.primary.black}>
              Stojanovska
            </AlinkTextLarge>
          </ContainerInlineFDirColAlignStart>
          <ContainerInlineFDirColAlignStart gap={theme.spacings.XXS}>
            <H4Styled>Mobile number</H4Styled>
            <AlinkTextLarge color={theme.colors.primary.black}>
              +89099 999 99 00
            </AlinkTextLarge>
          </ContainerInlineFDirColAlignStart>
          <ContainerInlineFDirColAlignStart gap={theme.spacings.XXS}>
            <H4Styled>Email </H4Styled>
            <AlinkTextLarge color={theme.colors.primary.black}>
              upr@com.gov.mk
            </AlinkTextLarge>
          </ContainerInlineFDirColAlignStart>
          <ContainerInlineFDirColAlignStart gap={theme.spacings.XXS}>
            <H4Styled>Date of birth</H4Styled>
            <AlinkTextLarge color={theme.colors.primary.black}>
              16 Jule 1994
            </AlinkTextLarge>
          </ContainerInlineFDirColAlignStart>
          <ContainerInlineFDirColAlignStart gap={theme.spacings.XXS}>
            <H4Styled>Gender</H4Styled>
            <AlinkTextLarge color={theme.colors.primary.black}>
              Female
            </AlinkTextLarge>
          </ContainerInlineFDirColAlignStart>
          <ContainerInlineFDirColAlignStart gap={theme.spacings.XXS}>
            <H4Styled>Address</H4Styled>
            <AlinkTextLarge color={theme.colors.primary.black}>
              Skopje,Macedonia
            </AlinkTextLarge>
          </ContainerInlineFDirColAlignStart>
        </ContainerDirColAlignStart>
        <PrimaryButton
          bg="white"
          color={theme.colors.primary.orange}
          onClick={() => {
            setIsModalDelete(true);
          }}
        >
          <ButtonsTypo color={theme.colors.primary.brown}>
            Delete my profile
          </ButtonsTypo>
        </PrimaryButton>
      </PageContainerPrimary>
      <ConfirmationModalContainer data-ismodalopen={isModalDelete}>
        <H2Styled>Are you sure you want to leave Velnes?</H2Styled>
        <Paragraph>
          Your profile can not be restored after you delete it
        </Paragraph>
        <BottomCtaDiv>
          <SearchCta
            firstText="Cancel"
            secondText="Delete Profile"
            nextHandler={() => {
              console.log("deleted");
            }}
            prevHandler={() => {
              setIsModalDelete(false);
            }}
          />
        </BottomCtaDiv>
      </ConfirmationModalContainer>
      <ReactDimmer
        isOpen={isModalDelete}
        exitDimmer={setIsModalDelete}
        zIndex={100}
        transition={0.4}
        opacity={0.6}
      />
    </>
  );
};

export default ViewProfilePage;

const ViewProfileImgDiv = styled.div`
  width: 58px;
  height: 58px;
  margin: 0 auto;
  flex-shrink: 0;
  border-radius: 50%;
  background: url(${DummyImg});
  background-size:cover;
    lightgray -12.759px -27.364px / 100% 149.982% no-repeat;
`;
const BottomCtaDiv = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 1000;
`;
const openModalStyles = css`
  transform: translateY(0%);
`;
const ConfirmationModalContainer = styled.div`
  position: fixed;
  top: 40vh;
  width: 100%;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 90vh;
  gap: 32px;
  z-index: 9999;

  overflow: auto;
  padding-top: 20px;
  padding: 22px 24px 32px 24px;
  border-radius: 26px 26px 0px 0px;
  background: #fff;
  transform: translateY(200%);
  transition: 0.5s;

  &[data-ismodalopen="true"] {
    ${openModalStyles}
  }
`;
