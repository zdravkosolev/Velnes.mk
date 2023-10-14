import styled from "styled-components";
import { theme } from "../styles/themeStyles";
import SearchCta from "../components/BottomCta/SearchCta";
import DragSwiper from "../components/DragSwiper/DragSwiper";
import FavoriteHeart from "../styles/Icons/Heart/FavoriteHeart";
import ShareIcon from "../styles/Icons/Action/ShareIcon";
import LeftSmallArrowIcon from "../styles/Icons/Arrows/LeftSmallArrowIcon";
import {
  ButtonsTypo,
  H2Styled,
  H3Styled,
  PnormalTextRegular,
} from "../styles/Headlines/Headlines";
import Rating from "../components/Rating/Rating";

import Titlebar from "../components/Titlebar/Titlebar";
import CardService from "../components/Cards/CardService/CardService";
import { ALink, PrimaryButtonFull } from "../styles/Buttons/Buttons";
import StaffMemberCard from "../components/Cards/StaffMemberCard/StaffMemberCard";
import ReviewStar from "../styles/Icons/ListingSmall/ReviewStar";
import RatingFactor from "../components/Rating/RatingFactor";
import CardReview from "../components/Cards/CardReview/CardReview";
import OpeningHours from "../components/OpeningHours/OpeningHours";
import PlaceholderIcon from "../styles/Icons/Common/PlaceholderIcon";
import InstagramAltIcon from "../styles/Icons/Socials/InstagramAltIcon";
import FaceBookIcon from "../styles/Icons/Socials/FaceBookIcon";
import GoogleIcon from "../styles/Icons/Socials/GoogleIcon";
import {
  ContainerAlignCenter,
  ContainerDirColAlignStart,
  ContainerDirColAlignStartWFull,
  ContainerFDirColItemsCenter,
} from "../styles/Section/SectionStyled";
import AdditionalInfoElement from "../components/AdditionalInfoElement/AdditionalInfoElement";
import Accordion from "../components/Accordion/Accordion";

import Footer from "../components/Footer/Footer";
import { IRoot, ISalonReview, SalonReviews } from "../DummyData";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { useShuffleArr } from "../Hooks/useShuffleArr";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import Aos from "aos";
import "aos/dist/aos.css";
import { useRatingConverter } from "../Hooks/useRatingConverter";
import CardRecommended from "../components/Cards/CardRecommended/CardRecommended";
import { useSalonsDataContext } from "../Context/SalonsDataContext/SalonsDataContext";

const SalonPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { salonsData, setSalonsData } = useSalonsDataContext();
  const [findedSalon, setFindedSalon] = useState<IRoot>();
  const [favoriteSalon, setFavoriteSalon] = useState(findedSalon?.isFavorite);

  useEffect(() => {
    if (id) {
      const dataSalon = salonsData.find((salon: IRoot) => salon.id === +id);
      if (dataSalon) {
        setFavoriteSalon(dataSalon.isFavorite);
      }
    }
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5001/salons/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setFindedSalon(data);
      });
  }, [id]);

  const putData = async () => {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...findedSalon,
        isFavorite: !findedSalon?.isFavorite,
      }),
    };

    const response = await fetch(
      `http://localhost:5001/salons/${id}`,
      requestOptions
    );
    if (!response.ok) {
      throw new Error("Failed to update salon data.");
    }
    const newData = await response.json();

    setSalonsData((prevSalonsData: IRoot[]) => {
      return prevSalonsData.map((salon) => {
        if (id && salon.id === +id) {
          return { ...salon, isFavorite: newData.isFavorite };
        } else {
          return salon;
        }
      });
    });

    setFavoriteSalon(newData.isFavorite);
  };

  useEffect(() => {
    Aos.init({ duration: 500 });
    Aos.refresh();
  }, []);

  const randomFiveReviews = useShuffleArr(SalonReviews);

  let salonRatingConverted;
  if (findedSalon?.reviewsOverall) {
    salonRatingConverted = useRatingConverter(findedSalon.reviewsOverall);
  }
  let trim3Services = findedSalon?.services.slice(0, 3);
  return (
    <>
      <BreadCrumbs salon={findedSalon?.name} />
      <TitlebarWrapper
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-offset={window.innerHeight + 200}
      >
        <Titlebar headline={findedSalon?.name} />
      </TitlebarWrapper>
      <SalonPageDiv>
        <DragSwiperWrapperParent>
          <DragSwiperWrapper>
            <IconContainer>
              <IconWrapper
                onClick={() => {
                  navigate(-1);
                }}
              >
                <LeftSmallArrowIcon size={20} />
              </IconWrapper>
              <IconConainerRightWrapper>
                <IconWrapper>
                  <ShareIcon size={20} />
                </IconWrapper>
                <IconWrapper
                  onClick={(e) => {
                    e.stopPropagation();
                    putData();
                  }}
                >
                  <FavoriteHeart
                    color={`${
                      favoriteSalon
                        ? theme.colors.primary.orange
                        : "transparent"
                    }`}
                    border="black"
                    size={20}
                  />
                </IconWrapper>
              </IconConainerRightWrapper>
            </IconContainer>
            <DragSwiper
              slidesPerView={1}
              spaceBetween={0}
              sliderHeight={250}
              parentMarginY={0}
            >
              {findedSalon?.salonPics.map((img: string) => (
                <img key={img} src={img} style={{ width: "100%" }} />
              ))}
            </DragSwiper>
          </DragSwiperWrapper>
        </DragSwiperWrapperParent>
        <div style={{ width: "100%", padding: "0 20px" }}>
          <ContainerDirColAlignStartWFull gap={theme.spacings.XS * 2}>
            <H2Styled>{findedSalon?.name}</H2Styled>
            <div
              onClick={() => {
                navigate("reviews");
              }}
            >
              {salonRatingConverted !== undefined && (
                <Rating
                  color={theme.colors.primary.orange}
                  rating={+salonRatingConverted}
                  reviewsNumber={findedSalon?.reviewsNumber}
                />
              )}
            </div>
            <ContainerDirColAlignStart gap={theme.spacings.XXS}>
              <PnormalTextRegular>
                {findedSalon?.category} Salon
              </PnormalTextRegular>
              <ContainerAlignCenter gap={theme.spacings.XS}>
                <PnormalTextRegular>Closed</PnormalTextRegular> &#183;
                <PnormalTextRegular>
                  Opens on Tuesday at 10:00
                </PnormalTextRegular>
              </ContainerAlignCenter>
            </ContainerDirColAlignStart>
          </ContainerDirColAlignStartWFull>
        </div>
        {/* Continue scroll */}

        <SectionSaloon>
          <ServicesWrapper>
            <H3Styled>Matching search</H3Styled>

            {trim3Services?.map((service, index) => (
              <CardService
                key={service.service}
                discount={index % 2 === 0}
                {...service}
              />
            ))}

            <PrimaryButtonFull
              bg={"transparent"}
              outline={theme.colors.primary.orange}
              onClick={() => {
                navigate("services");
              }}
            >
              <ButtonsTypo color={theme.colors.primary.brown}>
                See all
              </ButtonsTypo>
            </PrimaryButtonFull>
            {/* Meet our team */}

            <MeetOurTeamContainer>
              <H2Styled>Meet our team</H2Styled>
              <div style={{ maxWidth: "100%" }}>
                <DragSwiper
                  slidesPerView={3}
                  spaceBetween={70}
                  sliderHeight={250}
                  parentMarginY={0}
                >
                  {findedSalon?.employees.map((card) => (
                    <StaffMemberCard key={card.name} {...card} />
                  ))}
                </DragSwiper>
              </div>
            </MeetOurTeamContainer>
            {/* Reviews */}

            <SalonReviewsContainer>
              <ContainerAlignCenter gap={1}>
                <ReviewStar size={33} color={theme.colors.primary.orange} />
                <H2Styled color={theme.colors.primary.orange}>
                  {salonRatingConverted !== undefined && (
                    <>{+salonRatingConverted}</>
                  )}
                </H2Styled>
              </ContainerAlignCenter>

              <ContainerDirColAlignStart gap={10}>
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
              </ContainerDirColAlignStart>
              <div style={{ maxWidth: "100%" }}>
                <DragSwiper
                  slidesPerView={2}
                  spaceBetween={252}
                  sliderHeight={250}
                >
                  {randomFiveReviews.map((review: ISalonReview) => (
                    <CardReview key={review.userName} {...review} />
                  ))}
                </DragSwiper>
              </div>
              <PrimaryButtonFull
                bg={"transparent"}
                outline={theme.colors.primary.orange}
                onClick={() => {
                  navigate("reviews");
                }}
              >
                <ButtonsTypo color={theme.colors.primary.brown}>
                  See all {randomFiveReviews.length} reviews
                </ButtonsTypo>
              </PrimaryButtonFull>
            </SalonReviewsContainer>
            {/* about saloon */}
            <AboutSaloonContainer>
              <ContainerDirColAlignStart gap={theme.spacings.XL}>
                <H2Styled>About salon</H2Styled>
                <PnormalTextRegular>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo con Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatu Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id es Sed ut
                  perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium,
                </PnormalTextRegular>
              </ContainerDirColAlignStart>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94881.76732758866!2d21.424890249999997!3d41.99909025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135415a58c9aa2a5%3A0xb2ed88c260872020!2z0KHQutC-0L_RmNC1!5e0!3m2!1smk!2smk!4v1692117443443!5m2!1smk!2smk"
                width="100%"
                height="450"
                loading="lazy"
              ></iframe>

              <ContainerFDirColItemsCenter gap={theme.spacings.XS}>
                <ContainerDirColAlignStart gap={1}>
                  <PnormalTextRegular>
                    {`${findedSalon?.address}, ${findedSalon?.location}`}
                  </PnormalTextRegular>
                  <ALink color={theme.colors.primary.orange}>
                    Get directions
                  </ALink>
                </ContainerDirColAlignStart>
              </ContainerFDirColItemsCenter>
              {/* Opening hours */}
              <ContainerDirColAlignStart gap={theme.spacings.XS * 2}>
                <H3Styled>Opening hours</H3Styled>
                <ContainerDirColAlignStart gap={theme.spacings.XS}>
                  <ContainerDirColAlignStart gap={1}>
                    <OpeningHours
                      firstText="Monday"
                      secondText="10:00 – 18:00"
                    />
                    <OpeningHours
                      firstText="This Week"
                      secondText="Closed"
                      color={theme.colors.primary.orange}
                    />
                  </ContainerDirColAlignStart>
                  <OpeningHours
                    firstText="Tuesday"
                    secondText="10:00 – 18:00"
                  />
                  <OpeningHours
                    firstText="Wednesday"
                    secondText="10:00 – 18:00"
                  />
                  <OpeningHours
                    firstText="Thursday"
                    secondText="10:00 – 18:00"
                  />
                  <OpeningHours firstText="Friday" secondText="10:00 – 18:00" />
                  <OpeningHours
                    firstText="Saturday"
                    secondText="10:00 – 18:00"
                  />
                  <OpeningHours
                    firstText="Sunday"
                    secondText="Closed"
                    color={theme.colors.greys[700]}
                  />
                </ContainerDirColAlignStart>
              </ContainerDirColAlignStart>
              {/* Contact */}
              <ContainerDirColAlignStart gap={theme.spacings.XS * 2}>
                <H3Styled>Contact</H3Styled>
                <ContainerAlignCenter gap={theme.spacings.XS}>
                  <PlaceholderIcon color={theme.colors.greys[700]} />
                  <ALink color={theme.colors.primary.orange}>
                    (603) 555-0123
                  </ALink>
                </ContainerAlignCenter>
                <ContactInnerSocialsDiv>
                  <InstagramAltIcon color={theme.colors.greys[700]} size={24} />
                  <FaceBookIcon color={theme.colors.greys[700]} size={24} />
                  <GoogleIcon color={theme.colors.greys[700]} size={24} />
                </ContactInnerSocialsDiv>
              </ContainerDirColAlignStart>
              <ContainerDirColAlignStart>
                <H3Styled>Additional information</H3Styled>
                <ContainerDirColAlignStart gap={theme.spacings.M}>
                  <AdditionalInfoElement text="Pay by card" />
                  <AdditionalInfoElement text="Parking space" />
                  <AdditionalInfoElement text="Wi-Fi" />
                  <AdditionalInfoElement text="Wheelchair accessible" />
                  <AdditionalInfoElement text="Child friendly" />
                  <AdditionalInfoElement text="Pets allowed" />
                </ContainerDirColAlignStart>
              </ContainerDirColAlignStart>
              {/* Accordion */}
              <Accordion headline="Payment & cancellation policy" />
              <Accordion headline="Brands used" />
              <Accordion headline="Payment & cancellation policy" />
              {/* Recommended */}
              <H2Styled>Recommended</H2Styled>
              <DragSwiperWrapperParent>
                <DragSwiper
                  slidesPerView={2}
                  spaceBetween={252}
                  sliderHeight={330}
                  parentMarginY={0}
                >
                  {salonsData.map((salon: IRoot) => (
                    <CardRecommended key={salon.id} {...salon} />
                  ))}
                </DragSwiper>
              </DragSwiperWrapperParent>
            </AboutSaloonContainer>
          </ServicesWrapper>
        </SectionSaloon>
        <Footer />
        <BottomCtaDiv>
          <SearchCta
            firstText={`${findedSalon?.services.length} services`}
            secondText="Book"
            nextHandler={() => {
              navigate("services");
            }}
          />
        </BottomCtaDiv>
      </SalonPageDiv>
    </>
  );
};

export default SalonPage;
const SectionSaloon = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 100%;
  background: white;
`;

const SalonPageDiv = styled.div`
  background-color: ${theme.colors.secondary.lightorange};
  max-width: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;
  gap: 16px;
  padding-bottom: 80px;
`;
const BottomCtaDiv = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 1000;
`;
const DragSwiperWrapperParent = styled.div`
  max-width: 100%;
`;
const DragSwiperWrapper = styled.div`
  max-width: 100%;
  position: relative;
  height: 100%;
`;

const IconContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 200;
  min-width: 90%;
  display: flex;
  justify-content: space-between;
`;

const IconWrapper = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitlebarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  min-width: 100%;
  z-index: 1000;
`;
const ServicesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  padding: 20px;
  max-width: 100%;
`;
const MeetOurTeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  max-width: 100%;
`;
const SalonReviewsContainer = styled.div`
  display: flex;
  max-width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;

const AboutSaloonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  max-width: 100%;
`;

const ContactInnerSocialsDiv = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
`;
const IconConainerRightWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
