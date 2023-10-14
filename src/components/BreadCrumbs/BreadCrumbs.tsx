import styled from "styled-components";
import { PlinkTextDefault } from "../../styles/Headlines/Headlines";
import { theme } from "../../styles/themeStyles";
import { useNavigate } from "react-router";

const BreadCrumbs = ({ salon }: { salon: string | undefined }) => {
  const navigate = useNavigate();

  return (
    <BreadCrumbsDiv>
      <BreadCrumbsDivInner>
        <PlinkTextDefaultLastBold
          onClick={() => {
            navigate("/");
          }}
        >
          Home &#183;
        </PlinkTextDefaultLastBold>
        <PlinkTextDefaultLastBold
          onClick={() => {
            navigate("/search-results");
          }}
        >
          Search &#183;
        </PlinkTextDefaultLastBold>
        <PlinkTextDefaultLastBold>{salon} </PlinkTextDefaultLastBold>
      </BreadCrumbsDivInner>
    </BreadCrumbsDiv>
  );
};

export default BreadCrumbs;
const BreadCrumbsDiv = styled.div`
  width: 100%;
  padding: 20px 30px;
  background: ${theme.colors.secondary.lightorange};
`;
const BreadCrumbsDivInner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
`;
const PlinkTextDefaultLastBold = styled(PlinkTextDefault)`
  &:last-child {
    font-weight: 700;
  }
`;
