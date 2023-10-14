import Titlebar from "../components/Titlebar/Titlebar";
import {
  ContainerInlineFDirColAlignStart,
  ContainerJSpaceBetweenACenter,
  PageContainerPrimary,
} from "../styles/Section/SectionStyled";
import {
  AlinkTextLarge,
  H2Styled,
  Paragraph,
} from "../styles/Headlines/Headlines";
import { theme } from "../styles/themeStyles";
import { IOSSwitch } from "../styles/Switch Toggle/IosSwitch";

const ProfileEditNotificationPage = () => {
  return (
    <>
      <Titlebar icons={false} headline="" bg="white" />
      <PageContainerPrimary gap={theme.spacings.XL}>
        <ContainerInlineFDirColAlignStart gap={theme.spacings.XS}>
          <H2Styled color={theme.colors.primary.brown}>Notifications</H2Styled>
          <Paragraph>
            Velnes only sends notifications about appointments you have booked
          </Paragraph>
        </ContainerInlineFDirColAlignStart>

        <ContainerJSpaceBetweenACenter>
          <AlinkTextLarge color={theme.colors.primary.black}>
            Email appointment reminders
          </AlinkTextLarge>
          <IOSSwitch />
        </ContainerJSpaceBetweenACenter>

        <ContainerJSpaceBetweenACenter>
          <AlinkTextLarge color={theme.colors.primary.black}>
            Rebook reminders
          </AlinkTextLarge>
          <IOSSwitch />
        </ContainerJSpaceBetweenACenter>
        <ContainerJSpaceBetweenACenter>
          <AlinkTextLarge color={theme.colors.primary.black}>
            Email appointment reminders
          </AlinkTextLarge>
          <IOSSwitch />
        </ContainerJSpaceBetweenACenter>
        <ContainerJSpaceBetweenACenter>
          <AlinkTextLarge color={theme.colors.primary.black}>
            Newsletter
          </AlinkTextLarge>
          <IOSSwitch />
        </ContainerJSpaceBetweenACenter>
      </PageContainerPrimary>
    </>
  );
};

export default ProfileEditNotificationPage;
