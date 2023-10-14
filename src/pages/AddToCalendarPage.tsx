import styled from "styled-components";
import Titlebar from "../components/Titlebar/Titlebar";
import { ButtonsTypo, H2Styled } from "../styles/Headlines/Headlines";
import { theme } from "../styles/themeStyles";
import { ContainerInlineFDirColAlignStart } from "../styles/Section/SectionStyled";
import { PrimaryButtonFull } from "../styles/Buttons/Buttons";
import GoogleIcon from "../styles/Icons/Socials/GoogleIcon";
import CalendarIcon from "../styles/Icons/Common/CalendarIcon";

const AddToCalendarPage = () => {
  return (
    <>
      <Titlebar icons={false} headline="" bg="white" closeIcon={true} />
      <AddToCalendarPageContainer>
        <H2Styled color={theme.colors.primary.brown}>
          Add appointment to calendar
        </H2Styled>
        <ContainerInlineFDirColAlignStart gap={10}>
          <PrimaryButtonFull bg={"white"} outline={theme.colors.primary.orange}>
            <GoogleIcon size={24} color={theme.colors.primary.brown} />
            <ButtonsTypo color={theme.colors.primary.brown}>
              Google calendar
            </ButtonsTypo>
          </PrimaryButtonFull>
          <PrimaryButtonFull bg={"white"} outline={theme.colors.primary.orange}>
            <CalendarIcon size={24} color={theme.colors.primary.brown} />
            <ButtonsTypo color={theme.colors.primary.brown}>
              Other calendars
            </ButtonsTypo>
          </PrimaryButtonFull>
        </ContainerInlineFDirColAlignStart>
      </AddToCalendarPageContainer>
    </>
  );
};

export default AddToCalendarPage;
const AddToCalendarPageContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
`;
