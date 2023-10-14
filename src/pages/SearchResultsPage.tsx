import styled, { css } from "styled-components";
import { theme } from "../styles/themeStyles";
import CardSaloonBigger from "../components/Cards/CardSaloonBigger/CardSaloonBigger";
import { ALink, MapButton } from "../styles/Buttons/Buttons";
import {
  ButtonsTypo,
  H3Styled,
  PlinkTextDefault,
  PnormalTextBold,
} from "../styles/Headlines/Headlines";
import MapIcon from "../styles/Icons/Common/MapIcon";
import { ReactDimmer } from "react-dimmer";
import { useEffect, useState } from "react";
import SearchCta from "../components/BottomCta/SearchCta";
import CheckboxRow from "../components/Checkboxes/CheckboxRow";
import { Slider } from "@mui/material";
import DownSmallArrowIcon from "../styles/Icons/Arrows/DownSmallArrowIcon";
import {
  ContainerDirColAlignStart,
  ContainerDirColAlignStartWFull,
  ContainerFDirColItemsCenter,
  ContainerInlineFDirColAlignStart,
  ContainerJSpaceBetweenAStart,
} from "../styles/Section/SectionStyled";
import RadioButtonComponent from "../components/Radiobutton/Radiobutton";
import SearchBarTop from "../components/Inputs/SearchBarTop";
import { IRoot, SalonAmenities } from "../DummyData";
import { useSalonsDataContext } from "../Context/SalonsDataContext/SalonsDataContext";

const SearchResultsPage = ({ filterResults }: { filterResults: any }) => {
  const [isModalOpen, setModal] = useState(false);
  const [isModalFilter, setIsModalFilter] = useState(false);
  const [value, setValue] = useState<number[]>([20, 77]);
  const [isMapOpen, setMapOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [findedSalons, setFindedSalons] = useState<IRoot[]>([]);
  const [sortedByRadio, setSortedByRadio] = useState("");
  const [sortedByGender, setSortedByGender] = useState("");

  const MapHandler = () => {
    setMapOpen(true);
  };
  const FilterModalHanlder = () => {
    setIsModalFilter(true);
  };
  const ModalHandler = () => {
    setModal((prev) => !prev);
  };

  const handleChange = (e: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  const { salonsData } = useSalonsDataContext();
  useEffect(() => {
    const findedSalons: IRoot[] = salonsData.filter(
      (salon: IRoot) =>
        salon.services.some(
          (serv) =>
            serv.service.toLowerCase() === filterResults.treatment.toLowerCase()
        ) ||
        salon.category.toLowerCase() === filterResults.treatment.toLowerCase()
    );

    setFindedSalons(findedSalons);
    if (filterResults.treatment.toLowerCase() == "any") {
      setFindedSalons(salonsData);
    }
  }, [filterResults, salonsData]);

  let shortList;
  const isLongerCheckbox = SalonAmenities.length > 2;
  if (isLongerCheckbox) {
    shortList = SalonAmenities.slice(0, 2);
  }
  return (
    <SearchResultsPageDiv>
      <TopWrapper>
        <SearchBarTop
          textUpper={filterResults.treatment}
          downText={filterResults.date}
          filterHandler={FilterModalHanlder}
        />
      </TopWrapper>
      {/* cardcontainer */}
      {!isMapOpen ? (
        <ContainerFDirColItemsCenter>
          {findedSalons.map((salon: IRoot) => (
            <CardSaloonBigger
              key={salon.id}
              {...salon}
              filterResults={filterResults}
            />
          ))}
        </ContainerFDirColItemsCenter>
      ) : (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94881.76732758866!2d21.424890249999997!3d41.99909025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135415a58c9aa2a5%3A0xb2ed88c260872020!2z0KHQutC-0L_RmNC1!5e0!3m2!1smk!2smk!4v1692117443443!5m2!1smk!2smk"
          width="100%"
          height="660"
          loading="lazy"
          style={{
            border: "none",
          }}
        ></iframe>
      )}
      {/* button */}
      {!isMapOpen && (
        <MapButtonContainer onClick={MapHandler}>
          <MapButton color={theme.colors.primary.brown}>
            <ButtonsTypo>Map</ButtonsTypo>
            <MapIcon />
          </MapButton>
        </MapButtonContainer>
      )}
      {isMapOpen && (
        // modalContainer
        <MapModalContainer data-ismodalopen={isModalOpen}>
          <MapModalContainerInfoDiv onClick={ModalHandler}>
            <LineBold></LineBold>
            <PnormalTextBold>20 salons found</PnormalTextBold>
          </MapModalContainerInfoDiv>
        </MapModalContainer>
      )}
      {/* FiltersModal */}

      <FilterModalContainer data-ismodalopen={isModalFilter}>
        <FilterModalTitleDiv>
          <H3Styled color={theme.colors.primary.black}>Filters</H3Styled>
        </FilterModalTitleDiv>
        <FilterDiv>
          <ContainerInlineFDirColAlignStart gap={theme.spacings.M}>
            <ContainerInlineFDirColAlignStart>
              <H3Styled>Sort by</H3Styled>
            </ContainerInlineFDirColAlignStart>
            <ContainerDirColAlignStart gap={theme.spacings.M}>
              <RadioButtonComponent
                text="Recommended"
                name="sortby"
                outSideSetter={setSortedByRadio}
                outSideState={sortedByRadio}
              />
              <RadioButtonComponent
                text="Rating"
                name="sortby"
                outSideSetter={setSortedByRadio}
                outSideState={sortedByRadio}
              />
              <RadioButtonComponent
                text="Nearest to me"
                name="sortby"
                outSideSetter={setSortedByRadio}
                outSideState={sortedByRadio}
              />
            </ContainerDirColAlignStart>
          </ContainerInlineFDirColAlignStart>
          <hr />
          <ContainerInlineFDirColAlignStart>
            <Slider
              getAriaLabel={() => "Price range"}
              value={value}
              onChange={handleChange}
              max={200}
              valueLabelDisplay="auto"
            />
            <ContainerJSpaceBetweenAStart>
              <PlinkTextDefault>$0</PlinkTextDefault>
              <PlinkTextDefault>$200+</PlinkTextDefault>
            </ContainerJSpaceBetweenAStart>
          </ContainerInlineFDirColAlignStart>
          <hr />
          <ContainerDirColAlignStartWFull gap={theme.spacings.M}>
            <ContainerInlineFDirColAlignStart>
              <H3Styled>Amenities</H3Styled>
            </ContainerInlineFDirColAlignStart>
            <ContainerDirColAlignStartWFull gap={theme.spacings.M}>
              {showMore
                ? SalonAmenities.map((el, index) => (
                    <CheckboxRow key={index} text={el} />
                  ))
                : shortList?.map((el, index) => (
                    <CheckboxRow key={index} text={el} />
                  ))}

              {!showMore && (
                <ALink
                  color="black"
                  onClick={() => {
                    setShowMore(true);
                  }}
                >
                  Show More <DownSmallArrowIcon />
                </ALink>
              )}
            </ContainerDirColAlignStartWFull>
          </ContainerDirColAlignStartWFull>
          <hr />
          <ContainerDirColAlignStart gap={theme.spacings.M}>
            <ContainerInlineFDirColAlignStart>
              <H3Styled>Sort by</H3Styled>
            </ContainerInlineFDirColAlignStart>
            <ContainerDirColAlignStart gap={theme.spacings.M}>
              <RadioButtonComponent
                text="All"
                name="gender"
                outSideSetter={setSortedByGender}
                outSideState={sortedByGender}
              />
              <RadioButtonComponent
                text="Male"
                name="gender"
                outSideSetter={setSortedByGender}
                outSideState={sortedByGender}
              />
              <RadioButtonComponent
                text="Female"
                name="gender"
                outSideSetter={setSortedByGender}
                outSideState={sortedByGender}
              />
            </ContainerDirColAlignStart>
          </ContainerDirColAlignStart>
        </FilterDiv>
        <SearchCta
          firstText="Clear All"
          secondText="Show 1000 results"
          nextHandler={() => {}}
        />
      </FilterModalContainer>
      <ReactDimmer
        isOpen={isModalOpen}
        exitDimmer={setModal}
        zIndex={100}
        transition={0.4}
        opacity={0}
      />
      <ReactDimmer
        isOpen={isModalFilter}
        exitDimmer={setIsModalFilter}
        zIndex={100}
        transition={0.4}
        opacity={0}
      />
    </SearchResultsPageDiv>
  );
};

export default SearchResultsPage;

const SearchResultsPageDiv = styled.div`
  background-color: ${theme.colors.secondary.lightorange};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  padding-top: ${theme.spacings.L}px;
  padding-bottom: ${theme.spacings.L}px;
`;
const MapButtonContainer = styled.div`
  position: fixed;
  bottom: 30px;
`;
// ModalMap
const openModalStyles = css`
  transform: translateY(0%);
`;
const MapModalContainer = styled.div`
  color: white;
  max-height: 90vh;
  width: 100%;
  background-color: #fff;
  color: black;
  z-index: 200;

  transform: translateY(90%);
  transition: 0.5s;

  position: fixed;
  top: 10vh;
  left: 0;
  bottom: 0;

  display: flex;

  padding: 22px 24px 32px 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 23px;
  flex-shrink: 0;
  border-radius: 26px 26px 0px 0px;
  border: 1px solid rgba(255, 141, 103, 0.2);
  background: #fff;

  box-shadow: 0px 2px 18px 0px rgba(255, 141, 103, 0.2);

  &[data-ismodalopen="true"] {
    ${openModalStyles}
  }
`;
const MapModalContainerInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 21px;
  width: 100%;
`;
const LineBold = styled.div`
  width: 40px;
  height: 4px;
  border-radius: 99999px;
  background: #dadee2;
`;
//Filter Modal
const FilterModalContainer = styled.div`
  position: fixed;
  top: 10vh;
  width: 100%;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 90vh;
  gap: 32px;
  z-index: 300;

  overflow: auto;
  padding-top: 20px;

  border-radius: 26px 26px 0px 0px;
  background: #fff;
  transform: translateY(200%);
  transition: 0.5s;

  &[data-ismodalopen="true"] {
    ${openModalStyles}
  }
`;
const FilterModalTitleDiv = styled.div`
  width: 390px;
  height: 59px;
  border-radius: 13px 13px 0px 0px;
  border-bottom: 1px solid #b0b0b0;
  background: #fff;
  h3 {
    text-align: center;
  }
`;
const FilterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  width: 100%;
  padding: 0 20px;
`;
const TopWrapper = styled.div`
  padding: 0 20px;
  width: 100%;
`;
