import styled, { css } from "styled-components";
import Titlebar from "../components/Titlebar/Titlebar";
import CategoryButton from "../styles/Buttons/CategoryButton/CategoryButton";
import DragSwiper from "../components/DragSwiper/DragSwiper";
import { theme } from "../styles/themeStyles";
import {
  ContainerDirColAlignStartWFull,
  ContainerInlineFDirColAlignStart,
  ContainerJCenterACenter,
} from "../styles/Section/SectionStyled";
import InputSecondary from "../components/Inputs/InputSecondary";

import { H3Styled, PnormalTextRegular } from "../styles/Headlines/Headlines";
import InfoIcon from "../styles/Icons/Common/InfoIcon";
import CardService from "../components/Cards/CardService/CardService";

import DoubleLeftCta from "../components/BottomCta/DoubleLeftCta";
import { IRoot, SalonServicesCategory } from "../DummyData";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { ReactDimmer } from "react-dimmer";
import { ALink } from "../styles/Buttons/Buttons";
import { useServicesBookingContext } from "../Context/BookingContext/ServicesBookingContext";
import { IChoosedTreatment } from "../Context/BookingContext/ServicesBookingProvider";
import CardServicesConfirm from "../components/Cards/CardService/CardServicesConfirm";
import { useUniqueArr } from "../Hooks/useUniqueArr";
import { useSalonsDataContext } from "../Context/SalonsDataContext/SalonsDataContext";

const SalonAllServicesPage = () => {
  const { id } = useParams();
  const [findedSalon, setFindedSalon] = useState<IRoot>();
  const [isModalOpen, setModal] = useState(false);
  const [sureServices, setSureServices] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { contextData, setContextData } = useServicesBookingContext();
  const { salonsData } = useSalonsDataContext();

  useEffect(() => {
    if (id) {
      const findedSalon = salonsData.find((salon: IRoot) => salon.id === +id);
      setFindedSalon(findedSalon);
    }
  }, [id, salonsData]);

  let salonName;
  if (findedSalon) {
    salonName =
      findedSalon?.name.length > 10
        ? findedSalon?.name.slice(0, 10) + "..."
        : findedSalon?.name;
  }

  const skipSureServicesHandler = () => {
    setContextData((prev: IChoosedTreatment[]) =>
      prev.filter((serv: any) => sureServices.includes(serv.treatment))
    );
  };

  const filteredServices = findedSalon?.services.filter(
    (serv) =>
      serv.service.toLowerCase().includes(searchQuery.toLowerCase()) ||
      serv.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const servicesAllCategories = findedSalon?.services.map(
    (serv) => serv.category
  );

  let uniqueCategoriesFromServices: string[] | undefined;
  if (servicesAllCategories) {
    uniqueCategoriesFromServices = useUniqueArr(servicesAllCategories);
  }

  return (
    <>
      <TitlebarDiv>
        <Titlebar headline={`All services at ${salonName}`} icons={false} />
        <DragSwiperContainer>
          <DragSwiper slidesPerView={4} spaceBetween={26} parentMarginY={0}>
            {SalonServicesCategory.map((categ) => (
              <div
                key={categ.category}
                onClick={() => setSearchQuery(categ.category)}
              >
                <CategoryButton
                  category={categ.category}
                  colorBtn={categ.category == searchQuery}
                  icon={
                    <categ.icon
                      size={24}
                      color={
                        searchQuery == categ.category
                          ? "white"
                          : theme.colors.primary.orange
                      }
                    />
                  }
                  navigateHandler={() => {}}
                />
              </div>
            ))}
          </DragSwiper>
        </DragSwiperContainer>
      </TitlebarDiv>
      <ContainerInlineFDirColAlignStartModified gap={theme.spacings.XS * 2}>
        <InputSecondary outSideSetter={setSearchQuery} />
        <ContainerDirColAlignStartWFullModified>
          {uniqueCategoriesFromServices &&
            uniqueCategoriesFromServices.map((servCat: string) => {
              const servicesWithCategory = filteredServices?.filter(
                (serv) => serv.category === servCat
              );
              return servicesWithCategory?.length !== 0 ? (
                <ContainerDirColAlignStartWFull key={servCat}>
                  <ContainerJCenterACenter>
                    <H3Styled>{servCat}</H3Styled>
                    <InfoIcon color={theme.colors.greys[700]} />
                  </ContainerJCenterACenter>

                  {servicesWithCategory?.map((serv, index) => (
                    <CardService
                      key={index}
                      discount={index % 2 === 0}
                      {...serv}
                    />
                  ))}
                </ContainerDirColAlignStartWFull>
              ) : (
                ""
              );
            })}
        </ContainerDirColAlignStartWFullModified>
      </ContainerInlineFDirColAlignStartModified>
      <BottomCtaDiv>
        <DoubleLeftCta
          firstText={`${contextData.length} services`}
          secondText="Next"
          price={contextData.reduce(
            (total: number, serv: IChoosedTreatment) => total + serv.price,
            0
          )}
          nextHandler={() => {
            setModal(true);
          }}
          disabledButton={contextData.length === 0}
        />
      </BottomCtaDiv>
      <SearchModalContainer data-ismodalopen={isModalOpen}>
        <ContainerDirColAlignStartWFull gap={theme.spacings.XL}>
          <H3Styled>Often booked together</H3Styled>
          <PnormalTextRegular color={theme.colors.greys[700]}>
            Make sure you book all the services you need
          </PnormalTextRegular>
          <CardWrapperModal>
            {contextData?.map((serv: IChoosedTreatment) => (
              <CardServicesConfirm
                key={serv.treatment}
                price={serv.price}
                service={serv.treatment}
                isCheckStateSetterTreatmentArr={setSureServices}
              />
            ))}
          </CardWrapperModal>

          <BottomCtaDivModified>
            <ALink
              color={theme.colors.primary.black}
              onClick={() => {
                skipSureServicesHandler();
                navigate("booking");
              }}
            >
              Skip
            </ALink>
          </BottomCtaDivModified>
        </ContainerDirColAlignStartWFull>
      </SearchModalContainer>
      <ReactDimmer
        isOpen={isModalOpen}
        exitDimmer={setModal}
        zIndex={99}
        transition={0.4}
        opacity={0.6}
      />
    </>
  );
};

export default SalonAllServicesPage;
const TitlebarDiv = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
`;
const DragSwiperContainer = styled.div`
  background: ${theme.colors.secondary.lightorange};
  padding: 10px 20px;
`;

const ContainerInlineFDirColAlignStartModified = styled(
  ContainerInlineFDirColAlignStart
)`
  padding: 20px;

  margin-top: 200px;
`;
const ContainerDirColAlignStartWFullModified = styled(
  ContainerDirColAlignStartWFull
)`
  padding-bottom: 20px;
`;

const BottomCtaDiv = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 100;
`;

const BottomCtaDivModified = styled(BottomCtaDiv)`
  position: fixed;
  bottom: 0;
  z-index: 9999;
  text-align: center;
  width: 85%;
  padding: 30px;
  margin-top: 20px;
`;
const openModalStyles = css`
  transform: translateY(0%);
`;

const SearchModalContainer = styled.div<any>`
  color: white;
  max-height: 90vh;
  width: 100%;
  background-color: #fff;
  color: black;
  z-index: 200;
  overflow: auto;
  transform: translateY(200%);
  transition: 0.5s;

  position: fixed;
  top: 20vh;
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
const CardWrapperModal = styled.div`
  height: 55vh;
  overflow: auto;
  width: 100%;
`;
