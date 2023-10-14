import styled from "styled-components";
import { ButtonsTypo } from "../../styles/Headlines/Headlines";
import RightSmallArrowIcon from "../../styles/Icons/Arrows/RightSmallArrowIcon";

const Appointments = ({
  headline,
  clickHandler,
}: {
  headline: string;
  clickHandler?: any;
}) => {
  return (
    <AppointmentsContainer
      onClick={() => {
        clickHandler();
      }}
    >
      <AppointmentsContainerInner>
        <ButtonsTypo>{headline}</ButtonsTypo>
        <RightSmallArrowIcon />
      </AppointmentsContainerInner>
    </AppointmentsContainer>
  );
};

export default Appointments;
const AppointmentsContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 19px 15px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 12px;
  background: #fff3f0;
`;
const AppointmentsContainerInner = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  justify-content: space-between;
`;
