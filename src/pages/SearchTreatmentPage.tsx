import styled from "styled-components";
import { theme } from "../styles/themeStyles";
import { H2Styled } from "../styles/Headlines/Headlines";
import SearchOptions from "../components/SearchOptions/SearchOptions";
import SearchCta from "../components/BottomCta/SearchCta";
import InputTreatment from "../components/Inputs/InputTreatment";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchTreatmentPage = ({
  setFilterResults,
}: {
  setFilterResults: any;
}) => {
  const [selectedTreatment, setSelectedTreatment] = useState("");
  const [nextFirst, setNextFirst] = useState(false);
  const [nextSecond, setNextSecond] = useState(false);
  const [nextThird, setNextThird] = useState(false);
  const [nextFourth, setNextFourth] = useState(false);

  let buttonText = "Next";
  const navigate = useNavigate();
  if (nextFirst && nextSecond && nextThird && nextFourth) {
    buttonText = "Search";
  }

  const nextHandler = () => {
    if (!nextFirst) {
      setNextFirst(true);
      return;
    } else if (!nextSecond) {
      setNextSecond(true);
      return;
    } else if (!nextThird) {
      setNextThird(true);
      return;
    } else if (!nextFourth) {
      setNextFourth(true);
      return;
    }
  };

  useEffect(() => {
    setFilterResults((prev: any) => ({
      ...prev,
      treatment: selectedTreatment,
    }));
  }, [selectedTreatment]);

  return (
    <SearchTreatmentPageDiv>
      <PageWrapper>
        {!selectedTreatment ? (
          <SearchBarContainer>
            <SearchBarInner>
              <H2Styled color={theme.colors.primary.brown}>
                Treatment or venue
              </H2Styled>
              <InputTreatment
                selectHanlder={setSelectedTreatment}
                selectedTreatment={selectedTreatment}
                placeholder="Any treatment or venue"
                next={nextFirst}
                setNext={setNextFirst}
              />
            </SearchBarInner>
          </SearchBarContainer>
        ) : (
          <SearchOptions
            firstText="Treatment or venue"
            secondText={selectedTreatment}
            modalInputPlaceholder="Search for treatment"
            next={nextFirst}
            setNext={setNextFirst}
          />
        )}

        <SearchOptions
          firstText="Where"
          secondText="Nearest"
          modalInputPlaceholder="Search for location"
          next={nextSecond}
          setNext={setNextSecond}
          locationSuggest={true}
        />
        <SearchOptions
          firstText="Date"
          secondText="Any Date"
          modalTitle="Popular"
          type="date"
          next={nextThird}
          setNext={setNextThird}
          setFilterResults={setFilterResults}
        />
        <SearchOptions
          firstText="Time"
          secondText="Any Time"
          type="time"
          next={nextFourth}
          setNext={setNextFourth}
        />
      </PageWrapper>

      <SearchCta
        firstText="Skip"
        secondText={buttonText}
        nextHandler={() => {
          nextHandler();
          if (buttonText === "Search") {
            navigate("/search-results");
          }
        }}
        prevHandler={nextHandler}
      />
    </SearchTreatmentPageDiv>
  );
};

const SearchTreatmentPageDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background-color: ${theme.colors.secondary.lightgrey};
  min-height: 100vh;
`;
const PageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding-top: ${theme.spacings.L * 4}px;
`;
const SearchBarContainer = styled.div`
  display: flex;
  width: 366px;
  padding: 22px 25px 32px 25px;
  flex-direction: column;
  align-items: flex-start;
  gap: 23px;
  border-radius: 26px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: #fff;
  box-shadow: 0px 2px 18px 0px rgba(255, 141, 103, 0.2);
`;

const SearchBarInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
  color: ${theme.colors.primary.black};
`;

export default SearchTreatmentPage;
