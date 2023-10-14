import styled from "styled-components";
import Titlebar from "../components/Titlebar/Titlebar";
import {
  ButtonsTypo,
  H2Styled,
  H3Styled,
  Paragraph,
} from "../styles/Headlines/Headlines";
import { theme } from "../styles/themeStyles";
import AppointmentList from "../components/AppointmentsList/AppointmentList";
import { PrimaryButtonFull } from "../styles/Buttons/Buttons";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { IRoot } from "../DummyData";

const MyAppointmentsPage = () => {
  const navigate = useNavigate();
  const [dataSalons, setDataSalons] = useState<IRoot[]>([]);
  const [salonsWithApp, setSalonsWithApp] = useState<IRoot[]>([]);

  const [upcommingApp, setUpcommingApp] = useState([]);
  const [pastApp, setPastApp] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/salons")
      .then((res) => res.json())
      .then((data) => {
        setDataSalons(data);
      });
  }, []);

  useEffect(() => {
    const salonsWithAppointments = dataSalons.filter(
      (salon: IRoot) => salon.appointments?.length !== 0
    );
    setSalonsWithApp(salonsWithAppointments);
  }, [dataSalons]);

  useEffect(() => {
    const currentDate = new Date().getDate();

    const upcoming: any = [];
    const past: any = [];

    salonsWithApp.forEach((salon) => {
      if (salon.appointments && Array.isArray(salon.appointments)) {
        const hasUpcomingAppointments = salon.appointments.some(
          (appointment) =>
            appointment.choosedDate &&
            appointment.choosedDate.date >= currentDate
        );

        if (hasUpcomingAppointments) {
          upcoming.push(salon);
        } else {
          past.push(salon);
        }
      }
    });

    setUpcommingApp(upcoming);
    setPastApp(past);
  }, [salonsWithApp]);

  return (
    <>
    
      <Titlebar icons={false} headline="" bg="white" closeIcon={true} />
      <MyAppointmentsPageContainer>
        <H2Styled color={theme.colors.primary.brown}>My appointments</H2Styled>
        {upcommingApp.length != 0 && (
          <H3Styled color={theme.colors.primary.brown}>
            Upcoming appointments
          </H3Styled>
        )}
        {upcommingApp.map((salon: IRoot) => (
          <AppointmentList key={salon.id} {...salon} />
        ))}

        <Paragraph>Past appointments ({pastApp.length})</Paragraph>
        <PastAppointmentsContainer>
          {pastApp.map((salon: IRoot) => (
            <AppointmentList key={salon.id} {...salon} />
          ))}
        </PastAppointmentsContainer>
      </MyAppointmentsPageContainer>
      <BottomContainer>
        <PrimaryButtonFull
          bg={theme.colors.primary.orange}
          onClick={() => {
            navigate("/search-results");
          }}
        >
          <ButtonsTypo color="white">Find salons near you</ButtonsTypo>
        </PrimaryButtonFull>
      </BottomContainer>
    </>
  );
};

export default MyAppointmentsPage;
const MyAppointmentsPageContainer = styled.div`
  padding: 20px;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;
const PastAppointmentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  opacity: 0.6;
  width: 100%;
`;
const BottomContainer = styled.div`
  padding: 20px;
  position: fixed;
  bottom: 0;
  min-width: 100%;
  background: white;
`;
