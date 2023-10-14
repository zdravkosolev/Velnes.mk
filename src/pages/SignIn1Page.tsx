import styled from "styled-components";
import {
  ContainerDirColAlignStartWFull,
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
import InputDefault from "../components/Inputs/InputDefault";
import { PrimaryButtonFull } from "../styles/Buttons/Buttons";
import AppleIcon from "../styles/Icons/Socials/AppleIcon";
import GoogleIcon from "../styles/Icons/Socials/GoogleIcon";
import FaceBookCircleIcon from "../styles/Icons/Socials/FaceBookCircleIcon";
import { useNavigate } from "react-router";

const SignIn1Page = () => {
  const navigate = useNavigate();

  return (
    <>
      <Titlebar headline="Login or sign up" bg="white" icons={false} />
      <PageContainerPrimary>
        <ContainerInlineFFDirColAlignCenter gap={70}>
          <ContainerFDirColItemsCenterModified gap={32}>
            <ContainerFDirColItemsCenterModified gap={32}>
              {/* first */}
              <ContainerDirColAlignStartWFull gap={26}>
                <ContainerDirColAlignStartWFull gap={16}>
                  <ContainerDirColAlignStartWFull gap={1}>
                    <InputDefault
                      icon={true}
                      inputType="text"
                      placeholder="Country/Region"
                    />
                    <InputDefault
                      icon={false}
                      inputType="phone"
                      placeholder="Phone"
                    />
                  </ContainerDirColAlignStartWFull>
                  <PHelpText color={theme.colors.greys[700]}>
                    We’ll send a text message to this number
                  </PHelpText>
                  <PrimaryButtonFull
                    bg={theme.colors.primary.orange}
                    onClick={() => {
                      navigate("auth");
                    }}
                  >
                    <ButtonsTypo color="white">Continue </ButtonsTypo>
                  </PrimaryButtonFull>
                </ContainerDirColAlignStartWFull>
              </ContainerDirColAlignStartWFull>
              {/* second */}
              <ContainerFDirColItemsCenterModified gap={40}>
                <ContainerJCenterACenter gap={8}>
                  <PlinkTextDefault>or</PlinkTextDefault>
                </ContainerJCenterACenter>
                <ContainerFDirColItemsCenterModified gap={16}>
                  <PrimaryButtonFull
                    bg="white"
                    outline={theme.colors.primary.orange}
                  >
                    <AppleIcon color={theme.colors.primary.brown} size={24} />
                    <ButtonsTypo color={theme.colors.primary.brown}>
                      Continue with Apple
                    </ButtonsTypo>
                  </PrimaryButtonFull>
                  <PrimaryButtonFull
                    bg="white"
                    outline={theme.colors.primary.orange}
                  >
                    <GoogleIcon color={theme.colors.primary.brown} size={24} />
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
                      size={24}
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

export default SignIn1Page;

const ContainerFDirColItemsCenterModified = styled(ContainerFDirColItemsCenter)`
  width: 100%;
`;
