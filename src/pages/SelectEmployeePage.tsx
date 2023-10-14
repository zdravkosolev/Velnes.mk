import styled, { css } from "styled-components";
import InputDropdown from "../components/Inputs/InputDropdown";
import Titlebar from "../components/Titlebar/Titlebar";
import {
  AlinkTextLarge,
  ButtonsTypo,
  H2Styled,
  H3Styled,
  Paragraph,
} from "../styles/Headlines/Headlines";
import { theme } from "../styles/themeStyles";
import WeekDayButton from "../styles/Buttons/WeekDayButton/WeekDayButton";
import DragSwiper from "../components/DragSwiper/DragSwiper";
import {
  ContainerDirColAlignStart,
  ContainerInlineFDirColAlignStart,
} from "../styles/Section/SectionStyled";
import TimeRowButton from "../styles/Buttons/TimeRowButton/TimeRowButton";
import { useEffect, useState } from "react";
import { ReactDimmer } from "react-dimmer";
import DoubleLeftCta from "../components/BottomCta/DoubleLeftCta";
import { useNavigate, useParams } from "react-router";
import { IRoot } from "../DummyData";
import { useServicesBookingContext } from "../Context/BookingContext/ServicesBookingContext";
import { IChoosedTreatment } from "../Context/BookingContext/ServicesBookingProvider";
import { useSalonsDataContext } from "../Context/SalonsDataContext/SalonsDataContext";

const SelectEmployeePage = () => {
  const hoursArr = [
    { time: "5:00", type: "waiting" },
    { time: "6:00" },
    { time: "7:00" },
    { time: "8:00" },
    { time: "9:00", type: "waiting" },
    { time: "10:00" },
    { time: "11:00" },
    { time: "12:00" },
    { time: "13:00" },
  ];
  const { salonsData } = useSalonsDataContext();
  const [employeeSelected, setEmployeeSelected] = useState("No preference");
  const [dateSelected, setDateSelected] = useState<any>();
  const [hourSelected, setHourSelected] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isModalConfirm, setIsModalConfirm] = useState(false);
  const [findedSalon, setFindedSalon] = useState<IRoot>();
  const [dates, setDates] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();
  const { contextData, setContextData } = useServicesBookingContext();

  const employeesArr = findedSalon?.employees.map((emp) => emp.name);

  const currentMonth = new Date().toLocaleString("default", { month: "long" });

  useEffect(() => {
    const currentDate = new Date();
    const next10Days: any = [];

    for (let i = 0; i < 10; i++) {
      const nextDay = new Date();
      nextDay.setDate(currentDate.getDate() + i);

      const options = { weekday: "short", day: "numeric" };
      const formattedDate = nextDay.toLocaleDateString("en-US", options as any);

      next10Days.push(formattedDate);
    }

    setDates(next10Days);
  }, []);

  useEffect(() => {
    if (!dateSelected || !hourSelected) {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
  }, [hourSelected, dateSelected]);

  useEffect(() => {
    if (id) {
      setFindedSalon(salonsData.find((salon: IRoot) => salon.id == +id));
    }
  }, [id, salonsData]);

  const choosedEmployeeHandler = () => {
    setContextData((prev: IChoosedTreatment[]) =>
      prev.map((serv) => ({
        ...serv,
        choosedEmployee: employeeSelected,
        choosedDate: dateSelected,
        choosedTime: hourSelected,
      }))
    );
  };

  return (
    <>
      <ContainerSelectEmployee>
        <Titlebar headline="" icons={false} bg={"white"} />
        <H2Styled color={theme.colors.primary.brown}>Select employee</H2Styled>
        <InputDropdown
          outSiteSetter={setEmployeeSelected}
          options={employeesArr}
          InitialElement="No preference"
        />
        <H2Styled color={theme.colors.primary.black}>
          Select date and time
        </H2Styled>
        <ButtonsTypo>{currentMonth}</ButtonsTypo>
        <DragSwiper slidesPerView={5} spaceBetween={10} parentMarginY={0}>
          {dates.map((date: string) => {
            const day: string = date?.split(" ")[1];
            const dateOfMounth: string = date?.split(" ")[0];

            return (
              <WeekDayButton
                key={dateOfMounth}
                date={+dateOfMounth}
                day={day}
                type={+dateOfMounth % 3 === 0 ? "inactive" : "default"}
                outSiteSetter={setDateSelected}
                isSelected={dateSelected}
              />
            );
          })}
        </DragSwiper>

        <ContainerInlineFDirColAlignStart gap={1}>
          {hoursArr.map((hour: any, i: number) => (
            <TimeRowButton
              key={i}
              hour={hour.time}
              type={hour.type}
              outSiteSetter={setHourSelected}
              isSelected={hourSelected}
            />
          ))}
        </ContainerInlineFDirColAlignStart>
      </ContainerSelectEmployee>
      <ConfirmationModalContainer data-ismodalopen={isModalConfirm}>
        <ContainerDirColAlignStart gap={24}>
          <H3Styled>Waiting list registration</H3Styled>
          <Paragraph color={theme.colors.greys[700]}>
            Registering for waiting list doesn’t guarantee getting an
            appointment at the time you chose. If the time slot becomes
            available you will receive a request from the salon to confirm your
            booking.
          </Paragraph>
        </ContainerDirColAlignStart>
        <BottomCtaDivModified>
          <AlinkTextLarge
            color={theme.colors.primary.black}
            onClick={() => {
              choosedEmployeeHandler();
              navigate("review");
            }}
          >
            Okay
          </AlinkTextLarge>
        </BottomCtaDivModified>
      </ConfirmationModalContainer>
      {/* main */}
      <BottomCtaDiv>
        <DoubleLeftCta
          firstText={`${contextData?.length} services`}
          secondText="Checkout"
          price={contextData?.reduce(
            (total: number, serv: IChoosedTreatment) => total + serv.price,
            0
          )}
          nextHandler={() => {
            setIsModalConfirm(true);
          }}
          disabledButton={isButtonDisabled}
        />
      </BottomCtaDiv>
      <ReactDimmer
        isOpen={isModalConfirm}
        exitDimmer={setIsModalConfirm}
        zIndex={100}
        transition={0.4}
        opacity={0.6}
      />
    </>
  );
};

export default SelectEmployeePage;
const ContainerSelectEmployee = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 80px;
`;
const BottomCtaDiv = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 1000;
`;
const BottomCtaDivModified = styled(BottomCtaDiv)`
  text-align: center;
  padding-bottom: 20px;
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
