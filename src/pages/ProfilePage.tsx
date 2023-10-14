import styled from "styled-components";
import { theme } from "../styles/themeStyles";
import Titlebar from "../components/Titlebar/Titlebar";
import DummyImg from "../images/DummyImages/fb120378836111a07a5300c568dee5c5.png";
import { H2Styled } from "../styles/Headlines/Headlines";
import { ALink } from "../styles/Buttons/Buttons";
import { ContainerDirColAlignStartWFull } from "../styles/Section/SectionStyled";
import Appointments from "../components/Appointments/Appointments";
import { useNavigate } from "react-router";
const ProfilePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Titlebar headline="" icons={false} bg="white" />
      <ProfilePageContainer>
        <ProfilePageImgDiv></ProfilePageImgDiv>
        <div style={{ textAlign: "center" }}>
          <H2Styled>Katerina Stojanovska</H2Styled>
          <ALink
            onClick={() => {
              navigate("view-profile");
            }}
            color={theme.colors.primary.orange}
          >
            View Profile
          </ALink>
        </div>

        <ContainerDirColAlignStartWFull gap={theme.spacings.XS}>
          <Appointments
            clickHandler={() => {
              navigate("/my-appointments");
            }}
            headline="My appointments"
          />
          <Appointments
            headline="Loyalty"
            clickHandler={() => {
              navigate("my-appointments-loyalty");
            }}
          />
          <Appointments
            headline="My memberships"
            clickHandler={() => {
              navigate("my-memberships");
            }}
          />
          <Appointments
            headline="My favorites"
            clickHandler={() => {
              navigate("/favorites");
            }}
          />
          <Appointments
            headline="Settings"
            clickHandler={() => {
              navigate("profile-edit");
            }}
          />
          <Appointments
            headline="Log out"
            clickHandler={() => {
              navigate("/");
            }}
          />
        </ContainerDirColAlignStartWFull>
      </ProfilePageContainer>
      ;
    </>
  );
};

export default ProfilePage;
const ProfilePageContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;
const ProfilePageImgDiv = styled.div`
  width: 58px;
  height: 58px;
  background: url(${DummyImg});
  border-radius: 50%;
  background-size: cover;
  align-items: center;
`;
