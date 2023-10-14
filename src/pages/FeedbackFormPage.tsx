import styled from "styled-components";
import Titlebar from "../components/Titlebar/Titlebar";
import {
  ButtonsTypo,
  H2Styled,
  Paragraph,
  PlinkTextDefault,
} from "../styles/Headlines/Headlines";
import { PrimaryButtonFull } from "../styles/Buttons/Buttons";
import { theme } from "../styles/themeStyles";
import {
  ContainerAlignCenter,
  ContainerDirColAlignStart,
  ContainerInlineFDirColAlignStart,
  ContainerJSpaceBetweenACenter,
  ContainerJSpaceBetweenAStart,
  PageContainerPrimary,
} from "../styles/Section/SectionStyled";
import CalendarIcon from "../styles/Icons/Common/CalendarIcon";
import UserIcon from "../styles/Icons/Common/UserIcon";
import { Rating, Typography } from "@mui/material";
import TextArea from "../components/Inputs/TextArea";
import { useEffect, useState } from "react";
import { IRoot } from "../DummyData";
import { useNavigate, useParams } from "react-router";

const FeedbackFormPage = () => {
  const [findedSalon, setFindedSalon] = useState<IRoot>();
  const { id } = useParams();
  const currentMonth = new Date().toLocaleString("default", { month: "long" });
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5001/salons/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setFindedSalon(data);
      });
  }, []);

  return (
    <>
      <Titlebar icons={false} headline="" bg="white" />
      {/*  */}
      <PageContainerPrimary
        gap={theme.spacings.XXL}
        pbot={theme.spacings.XXS * 22}
      >
        <ContainerDirColAlignStart>
          <H2Styled color={theme.colors.primary.brown}>
            Give feedback to {findedSalon?.name}
          </H2Styled>
          <ContainerJSpaceBetweenACenter>
            <ContainerAlignCenter>
              <CalendarIcon
                size={theme.spacings.XL}
                color={theme.colors.greys[700]}
              />
              <PlinkTextDefault color={theme.colors.greys[700]}>
                {findedSalon?.appointments &&
                  `${findedSalon?.appointments[0].choosedDate?.day} ${findedSalon?.appointments[0].choosedDate?.date} ${currentMonth} , ${findedSalon?.appointments[0].choosedTime}`}
              </PlinkTextDefault>
            </ContainerAlignCenter>
            <ContainerAlignCenter gap={theme.spacings.XS}>
              <UserIcon size={24} color={theme.colors.greys[700]} />
              <PlinkTextDefault color={theme.colors.greys[700]}>
                {findedSalon?.appointments &&
                  findedSalon?.appointments[0].choosedEmployee}
              </PlinkTextDefault>
            </ContainerAlignCenter>
          </ContainerJSpaceBetweenACenter>
        </ContainerDirColAlignStart>

        <ContainerInlineFDirColAlignStart gap={theme.spacings.XL}>
          <ContainerJSpaceBetweenAStart>
            <Typography component="legend">
              <Paragraph>Ambience</Paragraph>
            </Typography>
            <Rating
              size="large"
              // value={value}
              onChange={(event, newValue) => {
                // setValue(newValue);
                console.log("ss");
              }}
            />
          </ContainerJSpaceBetweenAStart>
          <ContainerJSpaceBetweenAStart>
            <Typography component="legend">
              <Paragraph>Cleanliness</Paragraph>
            </Typography>
            <Rating
              size="large"
              // value={value}
              onChange={(event, newValue) => {
                // setValue(newValue);
                console.log("ss");
              }}
            />
          </ContainerJSpaceBetweenAStart>
          <ContainerJSpaceBetweenAStart>
            <Typography component="legend">
              <Paragraph>Staff</Paragraph>
            </Typography>
            <Rating
              size="large"
              // value={value}
              onChange={(event, newValue) => {
                // setValue(newValue);
                console.log("ss");
              }}
            />
          </ContainerJSpaceBetweenAStart>
        </ContainerInlineFDirColAlignStart>
        <TextArea />
      </PageContainerPrimary>
      {/*  */}
      <BottomContainer>
        <PrimaryButtonFull
          bg={theme.colors.primary.orange}
          onClick={() => {
            navigate("/my-appointments");
          }}
        >
          <ButtonsTypo color="white">Confirm</ButtonsTypo>
        </PrimaryButtonFull>
      </BottomContainer>
    </>
  );
};

export default FeedbackFormPage;

const BottomContainer = styled.div`
  padding: 20px;
  position: fixed;
  bottom: 0;
  min-width: 100%;
  background: white;
`;
