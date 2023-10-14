import styled from "styled-components";
import {
  ContainerDirColAlignStart,
  ContainerFDirColItemsCenter,
  ContainerInlineFFDirColAlignCenter,
  ContainerJCenterACenter,
  PageContainerPrimary,
} from "../styles/Section/SectionStyled";
import Titlebar from "../components/Titlebar/Titlebar";
import {
  ButtonsTypo,
  PHelpText,
  PlinkTextDefault,
} from "../styles/Headlines/Headlines";
import { theme } from "../styles/themeStyles";
import { PrimaryButtonFull } from "../styles/Buttons/Buttons";
import AppleIcon from "../styles/Icons/Socials/AppleIcon";
import GoogleIcon from "../styles/Icons/Socials/GoogleIcon";
import FaceBookCircleIcon from "../styles/Icons/Socials/FaceBookCircleIcon";
import InputNumber from "../components/Inputs/InputNumber";
import { useState } from "react";

const SignIn2Page = () => {
  const [isContinueBtn, setIsContinueBtn] = useState(true);

  let continueBtnBg = !isContinueBtn
    ? theme.colors.primary.orange
    : theme.colors.greys[300];
  let continueBtnColor = !isContinueBtn ? "#FFF" : theme.colors.greys[500];

  return (
    <>
      <Titlebar headline="Login or sign up" bg="white" icons={false} />
      <PageContainerPrimary>
        <ContainerInlineFFDirColAlignCenter gap={theme.spacings.XXL}>
          <ContainerFDirColItemsCenterModified gap={theme.spacings.L}>
            <ContainerFDirColItemsCenterModified gap={theme.spacings.L}>
              {/* first */}
              <ContainerDirColAlignStart gap={theme.spacings.XL}>
                <ContainerDirColAlignStart gap={theme.spacings.M}>
                  <ContainerFlex>
                    <InputNumber continueHandler={setIsContinueBtn} />
                    <InputNumber continueHandler={setIsContinueBtn} />
                    <InputNumber continueHandler={setIsContinueBtn} />
                    <InputNumber continueHandler={setIsContinueBtn} />
                    <InputNumber continueHandler={setIsContinueBtn} />
                  </ContainerFlex>
                  <PHelpText color={theme.colors.greys[700]}>
                    Enter the code from SMS
                  </PHelpText>
                </ContainerDirColAlignStart>
                <PrimaryButtonFull bg={continueBtnBg} disabled={isContinueBtn}>
                  <ButtonsTypo color={continueBtnColor}>Continue</ButtonsTypo>
                </PrimaryButtonFull>
                <PrimaryButtonFull
                  bg="white"
                  outline={theme.colors.primary.orange}
                >
                  <ButtonsTypo color={theme.colors.primary.brown}>
                    Send another code
                  </ButtonsTypo>
                </PrimaryButtonFull>
              </ContainerDirColAlignStart>
              {/* second */}
              <ContainerFDirColItemsCenterModified
                gap={theme.spacings.XXS * 10}
              >
                <ContainerJCenterACenter gap={theme.spacings.XXS * 2}>
                  <PlinkTextDefault>or</PlinkTextDefault>
                </ContainerJCenterACenter>
                <ContainerFDirColItemsCenterModified gap={theme.spacings.M}>
                  <PrimaryButtonFull
                    bg="white"
                    outline={theme.colors.primary.orange}
                  >
                    <AppleIcon
                      color={theme.colors.primary.brown}
                      size={theme.spacings.XL}
                    />
                    <ButtonsTypo color={theme.colors.primary.brown}>
                      Continue with Apple
                    </ButtonsTypo>
                  </PrimaryButtonFull>
                  <PrimaryButtonFull
                    bg="white"
                    outline={theme.colors.primary.orange}
                  >
                    <GoogleIcon
                      color={theme.colors.primary.brown}
                      size={theme.spacings.XL}
                    />
                    <ButtonsTypo color={theme.colors.primary.brown}>
                      Continue with Google
                    </ButtonsTypo>
                  </PrimaryButtonFull>
                  <PrimaryButtonFull
                    bg="white"
                    outline={theme.colors.primary.orange}
                  >
                    <FaceBookCircleIcon
                      color={theme.colors.primary.brown}
                      size={theme.spacings.XL}
                    />
                    <ButtonsTypo color={theme.colors.primary.brown}>
                      Continue with Facebook
                    </ButtonsTypo>
                  </PrimaryButtonFull>
                </ContainerFDirColItemsCenterModified>
              </ContainerFDirColItemsCenterModified>
            </ContainerFDirColItemsCenterModified>
          </ContainerFDirColItemsCenterModified>
        </ContainerInlineFFDirColAlignCenter>
      </PageContainerPrimary>
    </>
  );
};

export default SignIn2Page;

const ContainerFDirColItemsCenterModified = styled(ContainerFDirColItemsCenter)`
  width: 100%;
`;
const ContainerFlex = styled.div<any>`
  display: flex;
  gap: 21px;
`;
