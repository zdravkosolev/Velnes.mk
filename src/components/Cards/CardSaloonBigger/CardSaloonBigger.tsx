import styled from "styled-components";
import CardSaloon from "../CardSaloon/CardSaloon";
import {
  ButtonsTypo,
  PnormalTextRegular,
} from "../../../styles/Headlines/Headlines";
import { useState } from "react";
import { IRoot } from "../../../DummyData";
import { Link, useNavigate } from "react-router-dom";
interface Props extends IRoot {
  filterResults: any;
}
const CardSaloonBigger = ({
  address,
  isFavorite,
  location,
  name,
  services,
  thumbnail,
  reviewsNumber,
  id,
  category,
  employees,
  reviewsOverall,
  salonPics,
  filterResults,
}: Props) => {
  const navigate = useNavigate();
  const [isFavoriteState] = useState(isFavorite);

  let filteredServices = services.filter(
    (serv) => serv.service == filterResults.treatment
  );
  if (filteredServices.length == 0) {
    filteredServices = services;
  }

  const slicedServices = filteredServices.slice(0, 2);

  return (
    <CardSaloonBiggerDiv
      onClick={() => {
        navigate(`/salon/${id}`);
      }}
    >
      <CardSaloon
        address={address}
        location={location}
        isFavorite={isFavoriteState}
        name={name}
        thumbnail={thumbnail}
        reviewsNumber={reviewsNumber}
        id={id}
        services={services}
        category={category}
        employees={employees}
        reviewsOverall={reviewsOverall}
        salonPics={salonPics}
      />
      <hr />
      <BottomContainer>
        {slicedServices.map((service, index) => (
          <BottomContainerElement key={index}>
            <BottomContainerElementInnerLeft>
              <ButtonsTypo style={{ textTransform: "capitalize" }}>
                {service.service}
              </ButtonsTypo>
              <PnormalTextRegular>1 hr – 1 hr 25 min</PnormalTextRegular>
            </BottomContainerElementInnerLeft>
            <ButtonsTypo>from {service.price.short} EUR</ButtonsTypo>
          </BottomContainerElement>
        ))}
      </BottomContainer>

      <Link to={`/salon/${id}`} style={{ color: "#E56439" }}>
        See more
      </Link>
    </CardSaloonBiggerDiv>
  );
};

export default CardSaloonBigger;

const CardSaloonBiggerDiv = styled.div`
  display: flex;
  width: 342px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

const BottomContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;
const BottomContainerElement = styled.div`
  display: flex;
  width: 342px;
  justify-content: space-between;
  align-items: flex-start;
`;
const BottomContainerElementInnerLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`;
