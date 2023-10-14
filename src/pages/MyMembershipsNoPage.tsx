import styled from "styled-components";
import Titlebar from "../components/Titlebar/Titlebar";
import {
  ButtonsTypo,
  H2Styled,
  H3Styled,
  Paragraph,
} from "../styles/Headlines/Headlines";
import { theme } from "../styles/themeStyles";
import { PrimaryButtonFull } from "../styles/Buttons/Buttons";
import { PageContainerPrimary } from "../styles/Section/SectionStyled";
import { useNavigate } from "react-router";

const MyMembershipsNoPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Titlebar icons={false} headline="" bg="white" closeIcon={true} />

      <PageContainerPrimary>
        <H2Styled color={theme.colors.primary.brown}>My memberships</H2Styled>
        <MyMembershipsNoPageContainerInner>
          <H3Styled color={theme.colors.primary.black}>
            You have no active memberships
          </H3Styled>
          <Paragraph>Find have to buy a membership or book a service</Paragraph>
          <PrimaryButtonFull
            bg={"white"}
            outline={theme.colors.primary.orange}
            onClick={() => {
              navigate("/search-results");
            }}
          >
            <ButtonsTypo color={theme.colors.primary.brown}>
              Find salons near you
            </ButtonsTypo>
          </PrimaryButtonFull>
        </MyMembershipsNoPageContainerInner>
      </PageContainerPrimary>
    </>
  );
};

export default MyMembershipsNoPage;

const MyMembershipsNoPageContainerInner = styled.div`
  padding: 20px;

  display: flex;

  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 50vh;
  gap: 20px;
`;
