import styled from "styled-components";
import {
  ContainerAlignCenter,
  ContainerDirColAlignStartWFull,
  ContainerInlineFDirColAlignStart,
} from "../styles/Section/SectionStyled";
import Titlebar from "../components/Titlebar/Titlebar";
import ReviewStar from "../styles/Icons/ListingSmall/ReviewStar";
import { H2Styled, H3Styled } from "../styles/Headlines/Headlines";
import RatingFactor from "../components/Rating/RatingFactor";
import { theme } from "../styles/themeStyles";
import CardReview from "../components/Cards/CardReview/CardReview";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { IRoot, ISalonReview, SalonReviews } from "../DummyData";
import { useShuffleArr } from "../Hooks/useShuffleArr";
import { useRatingConverter } from "../Hooks/useRatingConverter";
import { useSalonsDataContext } from "../Context/SalonsDataContext/SalonsDataContext";

const SalonAllReviewsPage = () => {
  const { id } = useParams();
  const [findedSalon, setFindedSalon] = useState<IRoot>();
  const randomFiveReviews = useShuffleArr(SalonReviews);
  const { salonsData } = useSalonsDataContext();
  useEffect(() => {
    if (id) {
      const findedSalon = salonsData.find((salon: IRoot) => salon.id === +id);
      setFindedSalon(findedSalon);
    }
  }, [id, salonsData]);

  let rating;
  if (findedSalon?.reviewsOverall) {
    rating = useRatingConverter(findedSalon?.reviewsOverall);
  }

  const arrLengthCounter = (props: number) => {
    let arrCounter = [];
    randomFiveReviews.map((el: any) => {
      if (Math.ceil(el.reviewRate) == props) {
        arrCounter.push(Math.ceil(el.reviewRate));
      }
    });
    return arrCounter.length;
  };

  return (
    <>
      <TitlebarDiv>
        <Titlebar headline="All reviews" icons={false} />
      </TitlebarDiv>
      <ContainerInlineFDirColAlignStartModified>
        <ContainerDirColAlignStartModified>
          <ContainerAlignCenter gap={theme.spacings.M / 2}>
            <ReviewStar color={theme.colors.primary.orange} size={33} />
            <H2Styled color={theme.colors.primary.orange}>{rating}</H2Styled>
            &#183;
            <H2Styled color={theme.colors.primary.brown}>
              {randomFiveReviews.length} reviews
            </H2Styled>
          </ContainerAlignCenter>
          <ContainerDirColAlignStartWFull gap={theme.spacings.L / 2}>
            <RatingFactor
              placeholder="Ambience"
              results={findedSalon?.reviewsOverall.ambience}
            />
            <RatingFactor
              placeholder="Cleanliness"
              results={findedSalon?.reviewsOverall.cleanliness}
            />
            <RatingFactor
              placeholder="Staff"
              results={findedSalon?.reviewsOverall.staff}
            />
          </ContainerDirColAlignStartWFull>
        </ContainerDirColAlignStartModified>
        {/*  */}
        <ContainerDirColAlignStartWFull gap={theme.spacings.XS * 2}>
          <H3Styled>Filter by</H3Styled>
          <ContainerDirColAlignStartWFull gap={theme.spacings.M}>
            <RatingFactor
              placeholder="5"
              checkboxIcon={true}
              results={arrLengthCounter(5)}
            />
            <RatingFactor
              placeholder="4"
              checkboxIcon={true}
              results={arrLengthCounter(4)}
            />
            <RatingFactor
              placeholder="3"
              checkboxIcon={true}
              results={arrLengthCounter(3)}
            />
            <RatingFactor
              placeholder="2"
              checkboxIcon={true}
              results={arrLengthCounter(2)}
            />
            <RatingFactor
              placeholder="1"
              checkboxIcon={true}
              results={arrLengthCounter(1)}
            />
          </ContainerDirColAlignStartWFull>
          {randomFiveReviews.map((card: ISalonReview) => (
            <CardReview key={card.userName} {...card} />
          ))}
        </ContainerDirColAlignStartWFull>
      </ContainerInlineFDirColAlignStartModified>
    </>
  );
};
// card review
export default SalonAllReviewsPage;

const ContainerInlineFDirColAlignStartModified = styled(
  ContainerInlineFDirColAlignStart
)`
  padding: 0 20px;
`;

const ContainerDirColAlignStartModified = styled(
  ContainerDirColAlignStartWFull
)`
  margin-top: 70px;
`;
const TitlebarDiv = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
`;
