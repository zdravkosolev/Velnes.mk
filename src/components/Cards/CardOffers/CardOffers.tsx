import styled from "styled-components";
import {
  AlinkTextLarge,
  ButtonsTypo,
  PHelpText,
} from "../../../styles/Headlines/Headlines";
import { theme } from "../../../styles/themeStyles";
import ReviewStar from "../../../styles/Icons/ListingSmall/ReviewStar";
import { PrimaryButtonFull } from "../../../styles/Buttons/Buttons";
import { useNavigate } from "react-router";
import { IRoot } from "../../../DummyData";
import { useRatingConverter } from "../../../Hooks/useRatingConverter";
import { useRandomIncreasingPrice } from "../../../Hooks/useRandomIncreasingPrice";

const CardOffers = ({
  reviewsNumber,
  name,
  reviewsOverall,
  services,
  id,
}: IRoot) => {
  const navigate = useNavigate();
  const rating = useRatingConverter(reviewsOverall);

  const sortedServices = services.slice().sort((serviceA, serviceB) => {
    return serviceA.price.short - serviceB.price.short;
  });

  const increasedLineTroughtPrice = useRandomIncreasingPrice(
    sortedServices[0].price.short
  );
  return (
    <CardOffersContainer>
      <CardOffersInnerUp>
        <CardOffersInnerUpFirst>
          <AlinkTextLarge
            color={theme.colors.primary.black}
            style={{ textTransform: "capitalize" }}
          >
            {services[0].service}
          </AlinkTextLarge>
        </CardOffersInnerUpFirst>
        <CardOffersInnerUpSecond>
          <AlinkTextLargeCustom color={theme.colors.greys[600]}>
            {increasedLineTroughtPrice} EUR
          </AlinkTextLargeCustom>
          <AlinkTextLarge color={theme.colors.primary.orange}>
            {sortedServices[0].price.short} EUR
          </AlinkTextLarge>
        </CardOffersInnerUpSecond>
      </CardOffersInnerUp>
      <CardOffersInnerMid>
        <AlinkTextLarge color={theme.colors.primary.black}>
          {name}
        </AlinkTextLarge>
        <CardOffersInnerRatingParent>
          <CardOffersInnerRatingDiv>
            <ReviewStar color={theme.colors.primary.orange} />{" "}
            <span>{rating}</span>
          </CardOffersInnerRatingDiv>
          <PHelpText color={theme.colors.greys[700]}>
            &#183; {reviewsNumber} reviews
          </PHelpText>
        </CardOffersInnerRatingParent>
      </CardOffersInnerMid>
      <PrimaryButtonFull
        bg={theme.colors.primary.orange}
        onClick={() => {
          navigate(`/salon/${id}/services`);
        }}
      >
        <ButtonsTypo color={"white"}>Book</ButtonsTypo>
      </PrimaryButtonFull>
    </CardOffersContainer>
  );
};

export default CardOffers;
const CardOffersContainer = styled.div`
  display: flex;
  width: 270px;
  padding: 12px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;

  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.16);
`;
const CardOffersInnerUp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;
const CardOffersInnerUpFirst = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
const CardOffersInnerUpSecond = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
const AlinkTextLargeCustom = styled(AlinkTextLarge)`
  color: ${(props) => props.color};
  text-decoration-line: line-through;
`;
const CardOffersInnerMid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
`;
const CardOffersInnerRatingParent = styled.div`
  display: flex;
  width: 120px;
  justify-content: space-between;
  align-items: center;
`;
const CardOffersInnerRatingDiv = styled.div`
  display: flex;
  width: 40px;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
  color: ${theme.colors.primary.orange};
`;
