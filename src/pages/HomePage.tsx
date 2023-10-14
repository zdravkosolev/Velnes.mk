import Navbar from "../components/Navbar/Navbar";
import DragSwiper from "../components/DragSwiper/DragSwiper";
import SearchBar from "../components/Inputs/SearchBar";
import DownSmallArrow from "../styles/Icons/Arrows/DownSmallArrowIcon";
import { H2Styled, H4Styled, Paragraph } from "../styles/Headlines/Headlines";

import CategoryButton from "../styles/Buttons/CategoryButton/CategoryButton";
import { useRef } from "react";
import { SectionStyled } from "../styles/Section/SectionStyled";
import CardReview from "../components/Cards/CardReview/CardReview";
import CardOffers from "../components/Cards/CardOffers/CardOffers";
import styled from "styled-components";
import { theme } from "../styles/themeStyles";
import BenefitsCard, {
  BenefitsCardImgDiv,
} from "../components/Cards/BenefitsCard/BenefitsCard";
import { PrimaryButtonFull } from "../styles/Buttons/Buttons";
import Footer from "../components/Footer/Footer";
import { SalonServicesCategory, SalonReviews, IRoot } from "../DummyData";
import { useNavigate } from "react-router";
import CardRecommended from "../components/Cards/CardRecommended/CardRecommended";
import { useSalonsDataContext } from "../Context/SalonsDataContext/SalonsDataContext";

interface Props {
  setFilterResults: any;
}

const HomePage = ({ setFilterResults }: Props) => {
  const navigate = useNavigate();
  const { salonsData } = useSalonsDataContext();

  const recommendedCardArr = salonsData?.map((card: IRoot) => (
    <CardRecommended key={card.id} {...card} />
  ));

  const categoryComponents = SalonServicesCategory.map((categ) => (
    <CategoryButton
      key={categ.category}
      category={categ.category}
      icon={<categ.icon size={24} color={theme.colors.primary.orange} />}
      navigateHandler={() => {
        setFilterResults((prev: any) => ({
          ...prev,
          treatment: categ.category,
        }));
        navigate("/search-results");
      }}
    />
  ));

  const reviewsCardArr = SalonReviews.map((card) => (
    <CardReview key={card.userName} {...card} />
  ));

  const CardOffersArr = salonsData.map((card: IRoot) => {
    return <CardOffers key={card.id} {...card} />;
  });

  const recommendedDiv = useRef<HTMLDivElement | null>(null);
  const onArrowHandler = () => {
    if (recommendedDiv.current) {
      recommendedDiv.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <HomePageStyled>
        <Navbar />
        <H1Styled color={theme.colors.primary.brown}>
          Book beauty and wellness services in Skopje
        </H1Styled>
        <SearchBar />

        <DragSwiper slidesPerView={4} spaceBetween={26}>
          {categoryComponents}
        </DragSwiper>

        <ArrowDivContainer onClick={onArrowHandler}>
          <DownSmallArrow />
        </ArrowDivContainer>

        <SectionStyled ref={recommendedDiv}>
          <H2Styled color={theme.colors.primary.brown}>Recommended</H2Styled>
          <DragSwiper slidesPerView={2} spaceBetween={252} sliderHeight={330}>
            {recommendedCardArr}
          </DragSwiper>
        </SectionStyled>

        <SectionStyled>
          <H2Styled color={theme.colors.primary.brown}>Recent reviews</H2Styled>
          <DragSwiper slidesPerView={2} spaceBetween={252} sliderHeight={250}>
            {reviewsCardArr}
          </DragSwiper>
        </SectionStyled>

        <SectionStyled>
          <H2Styled color={theme.colors.primary.brown}>Special offers</H2Styled>
          <DragSwiper slidesPerView={2} spaceBetween={252} sliderHeight={245}>
            {CardOffersArr}
          </DragSwiper>
        </SectionStyled>
        <SectionCustomBenefits>
          <H2Styled color={theme.colors.primary.brown}>
            Benefits of Velnes
          </H2Styled>
          <BenefitsCard
            headline="Smart prices"
            paragraph="Just book last-minute, or off-peak"
          />
          <BenefitsCard headline="Book 24/7" paragraph="From bed, or the bus" />
          <BenefitsCard
            headline="Choice of top-rated salons"
            paragraph="Thousands of venues (and reviews)"
          />
        </SectionCustomBenefits>
        <SectionCustomVelnesBusiness>
          <H2StyledCustomBusiness color={theme.colors.primary.brown}>
            Velnes for business
          </H2StyledCustomBusiness>
          <Paragraph>
            Get started with Velnes to run your bushess, better. Calendar,
            Booking, Marketing, and Payments all in one.
          </Paragraph>
          <PrimaryButtonFull bg={theme.colors.primary.lightorange}>
            <H4Styled color={"white"}>Find out more</H4Styled>
          </PrimaryButtonFull>
          <BenefitsCardImgDiv />
        </SectionCustomVelnesBusiness>
      </HomePageStyled>
      <Footer />
    </>
  );
};

export default HomePage;
const HomePageStyled = styled.div`
  background: ${theme.colors.secondary.lightorange};
  background: linear-gradient(
    180deg,
    ${theme.colors.secondary.orange} 13%,
    ${theme.colors.secondary.lightorange} 16%
  );

  padding-top: 82px;
  padding-left: ${theme.spacings.L}px;
  padding-right: ${theme.spacings.L}px;
`;
const H1Styled = styled.h1`
  margin: 0;
  color: ${theme.colors.primary.brown};
  margin-top: ${theme.spacings.XL * 4}px;
  margin-bottom: ${theme.spacings.XL * 4}px;
`;
const ArrowDivContainer = styled.div`
  text-align: center;
  margin: 100px 0;
`;
const SectionCustomBenefits = styled(SectionStyled)`
  display: inline-flex;
  flex-direction: column;
  gap: 40px;
`;

const SectionCustomVelnesBusiness = styled(SectionStyled)`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  margin-bottom: ${theme.spacings.XL * 2}px;
`;

const H2StyledCustomBusiness = styled(H2Styled)`
  margin: 0;
`;
