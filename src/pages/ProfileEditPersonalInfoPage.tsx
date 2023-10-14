import Titlebar from "../components/Titlebar/Titlebar";
import { H2Styled } from "../styles/Headlines/Headlines";
import { theme } from "../styles/themeStyles";
import {
  ContainerInlineFDirColAlignStart,
  PageContainerPrimary,
} from "../styles/Section/SectionStyled";
import InputDefault from "../components/Inputs/InputDefault";

const ProfileEditPersonalInfoPage = () => {
  return (
    <>
      <Titlebar headline="" icons={false} bg="white" />
      <PageContainerPrimary gap={theme.spacings.L}>
        <H2Styled color={theme.colors.primary.brown}>
          Edit personal info
        </H2Styled>
        <ContainerInlineFDirColAlignStart gap={theme.spacings.L}>
          <InputDefault inputType="text" placeholder="First name" />
          <InputDefault inputType="text" placeholder="Last name" />
          <InputDefault inputType="date" placeholder="Birthday" />
          <InputDefault inputType="text" placeholder="Gender" icon={true} />
          <InputDefault inputType="email" placeholder="Email" />
          <InputDefault inputType="phone" placeholder="Phone number" />
          <InputDefault inputType="text" placeholder="Adress" />
        </ContainerInlineFDirColAlignStart>
      </PageContainerPrimary>
    </>
  );
};

export default ProfileEditPersonalInfoPage;
