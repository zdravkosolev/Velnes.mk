import styled from "styled-components";
import RightSmallArrowIcon from "../../styles/Icons/Arrows/RightSmallArrowIcon";
import {
  H4Styled,
  Paragraph,
  PnormalTextRegular,
} from "../../styles/Headlines/Headlines";
import { theme } from "../../styles/themeStyles";
import { useNavigate } from "react-router";
import { IRoot } from "../../DummyData";

interface Props extends IRoot {
  iconRight?: boolean;
}
const AppointmentList = ({
  iconRight = true,
  name,
  appointments,
  thumbnail,
  id,
}: Props) => {
  const navigate = useNavigate();
  let dateTermin;
  let dayTermin;
  let timeTermin;
  if (appointments) {
    dateTermin = appointments[0].choosedDate?.date;
    dayTermin = appointments[0].choosedDate?.day;
    timeTermin = appointments[0].choosedTime;
  }

  return (
    <AppointmentListContainer
      onClick={() => {
        navigate(`/my-appointments/upcoming-appointments-details/${id}`);
      }}
    >
      <AppointmentListContainerImgDiv thumbnail={thumbnail} />
      <AppointmentListContainerInnerDiv>
        <AppointmentListContainerInnerDivLast>
          <PnormalTextRegular>
            {`${dayTermin} ${dateTermin} ${new Date().toLocaleString(
              "default",
              { month: "short" }
            )} `}
            at {timeTermin}
          </PnormalTextRegular>
          <H4Styled>{name}</H4Styled>
          <Paragraph>{appointments?.length} services</Paragraph>
        </AppointmentListContainerInnerDivLast>
        {iconRight && (
          <RightSmallArrowIcon color={theme.colors.greys[700]} size={24} />
        )}
      </AppointmentListContainerInnerDiv>
    </AppointmentListContainer>
  );
};

export default AppointmentList;
const AppointmentListContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 15px;
  width: 100%;
`;
const AppointmentListContainerImgDiv = styled.div<any>`
  display: flex;
  min-width: 74px;
  min-height: 67px;

  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background: url(${(props) => props.thumbnail}), lightgray 50%;
  background-size: cover;
`;
const AppointmentListContainerInnerDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;
const AppointmentListContainerInnerDivLast = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1px;
  flex: 1 0 0;
`;
