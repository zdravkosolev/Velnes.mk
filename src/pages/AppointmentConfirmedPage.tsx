import styled from "styled-components";
import {
  ButtonsTypo,
  H2Styled,
  PlinkTextDefault,
  PnormalTextBold,
  PnormalTextRegular,
} from "../styles/Headlines/Headlines";
import { theme } from "../styles/themeStyles";
import {
  ContainerAlignCenter,
  ContainerDirColAlignStartWFull,
} from "../styles/Section/SectionStyled";
import CalendarIcon from "../styles/Icons/Common/CalendarIcon";
import EditAltIcon from "../styles/Icons/Common/EditAltIcon";
import { PrimaryButtonFull } from "../styles/Buttons/Buttons";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { IRoot } from "../DummyData";
import { useServicesBookingContext } from "../Context/BookingContext/ServicesBookingContext";
import { useSalonsDataContext } from "../Context/SalonsDataContext/SalonsDataContext";
const AppointmentConfirmedPage = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [findedSalon, setFindedSalon] = useState<IRoot>();
  const { salonsData } = useSalonsDataContext();

  const { contextData, setContextData } = useServicesBookingContext();
  const currentMonth = new Date().toLocaleString("default", { month: "long" });
  useEffect(() => {
    if (id) {
      setFindedSalon(salonsData.find((salon: IRoot) => salon.id == +id));
    }
  }, [id, salonsData]);

  return (
    <>
      <AppointmentConfirmedPageContainer>
        <InfoContainer>
          <H2Styled color={theme.colors.primary.brown}>
            Appointment confirmed
          </H2Styled>
          <ContainerDirColAlignStartWFull gap={theme.spacings.XS}>
            <ContainerAlignCenter gap={theme.spacings.XS}>
              <ContainerFirstImgDiv thumbnail={findedSalon?.thumbnail} />
              <PnormalTextBold>{findedSalon?.name}</PnormalTextBold>
            </ContainerAlignCenter>

            <ContainerAlignCenter gap={theme.spacings.XS}>
              <CalendarIcon color={theme.colors.greys[700]} />
              <PnormalTextRegular>
                {`${contextData[0].choosedDate.day} ${contextData[0].choosedDate.date} ${currentMonth},${contextData[0].choosedTime} `}
              </PnormalTextRegular>
              <div
                onClick={() => {
                  navigate(`/salon/${id}/services/booking`);
                }}
              >
                <EditAltIcon color={theme.colors.greys[700]} />
              </div>
            </ContainerAlignCenter>
          </ContainerDirColAlignStartWFull>
          <PlinkTextDefault>{contextData.length} services</PlinkTextDefault>
          <ContainerDirColAlignStartWFull gap={theme.spacings.XS}>
            <PrimaryButtonFull
              outline={theme.colors.primary.orange}
              bg={"white"}
              onClick={() => {
                navigate("/my-appointments");
                setContextData([]);
              }}
            >
              <ButtonsTypo color={theme.colors.primary.brown}>
                View details
              </ButtonsTypo>
            </PrimaryButtonFull>
            <PrimaryButtonFull
              outline={theme.colors.primary.orange}
              bg={"white"}
              onClick={() => {
                navigate("/add-to-calendar");
              }}
            >
              <ButtonsTypo color={theme.colors.primary.brown}>
                Add to calendar
              </ButtonsTypo>
            </PrimaryButtonFull>
          </ContainerDirColAlignStartWFull>
        </InfoContainer>
        <BottomContainer>
          <PrimaryButtonFull
            bg={theme.colors.primary.orange}
            border={"green"}
            onClick={() => {
              navigate("/search-results");
            }}
          >
            <ButtonsTypo color={"white"}>Back to browsing</ButtonsTypo>
          </PrimaryButtonFull>
        </BottomContainer>
      </AppointmentConfirmedPageContainer>
    </>
  );
};

export default AppointmentConfirmedPage;
const AppointmentConfirmedPageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-height: 100vh;
`;
const InfoContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;
const ContainerFirstImgDiv = styled.div<any>`
  display: flex;
  min-width: 58px;
  min-height: 52px;

  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background: url(${(props) => props.thumbnail}), lightgray 50%;
  background-size: cover;
`;
const BottomContainer = styled.div`
  position: fixed;
  bottom: 10px;
  width: 90%;
`;
