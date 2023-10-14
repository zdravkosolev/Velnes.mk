import Titlebar from "../components/Titlebar/Titlebar";
import { H2Styled } from "../styles/Headlines/Headlines";
import { theme } from "../styles/themeStyles";
import {
  ContainerInlineFDirColAlignStart,
  PageContainerPrimary,
} from "../styles/Section/SectionStyled";
import Appointments from "../components/Appointments/Appointments";
import styled from "styled-components";
import { useNavigate } from "react-router";

const ManageAppointmentsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Titlebar icons={false} headline="" bg="white" closeIcon={true} />
      <PageContainerPrimary gap={theme.spacings.M * 2}>
        <H2Styled color={theme.colors.primary.brown}>
          Manage appointment
        </H2Styled>
        <ContainerInlineFDirColAlignStart gap={theme.spacings.XS}>
          <Appointments
            headline="Add to calendar"
            clickHandler={() => {
              navigate("/add-to-calendar");
            }}
          />

          <Appointments
            headline="Reschedule appointment"
            clickHandler={() => {
              console.log("need to finish");
            }}
          />

          <Appointments
            headline="Cancel appointment"
            clickHandler={() => {
              navigate("cancel");
            }}
          />
        </ContainerInlineFDirColAlignStart>
      </PageContainerPrimary>
    </>
  );
};

export default ManageAppointmentsPage;
const AppointmentWrapper = styled.div`
  width: 100%;
`;
