import styled from "styled-components";
import Titlebar from "../components/Titlebar/Titlebar";
import DummyImg from "../images/DummyImages/fb120378836111a07a5300c568dee5c5.png";
import CameraIcon from "../styles/Icons/Profile/CameraIcon";
import { theme } from "../styles/themeStyles";
import Appointments from "../components/Appointments/Appointments";
import { PageContainerPrimary } from "../styles/Section/SectionStyled";
import { useNavigate } from "react-router";
const ProfileEditPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Titlebar headline="Edit Profile" icons={false} bg="white" />
      <PageContainerPrimary gap={theme.spacings.L}>
        <ViewProfileImgDiv />
        <div style={{ marginLeft: "auto" }}>
          <CameraIcon color={theme.colors.greys[700]} size={20} />
        </div>
        <Appointments
          headline="Personal info"
          clickHandler={() => {
            navigate("personal-info");
          }}
        />
        <Appointments
          headline="Notification settings"
          clickHandler={() => {
            navigate("notification-settings");
          }}
        />
        <Appointments
          headline="Payment methods"
          clickHandler={() => {
            navigate("payment-methods");
          }}
        />
      </PageContainerPrimary>
    </>
  );
};

export default ProfileEditPage;
const ViewProfileImgDiv = styled.div`
width: 157px;
height: 157px;
  margin: 0 auto;
  flex-shrink: 0;
  border-radius: 50%;
  background: url(${DummyImg});
  background-size:cover;
    lightgray -12.759px -27.364px / 100% 149.982% no-repeat;
`;
