import styled from "styled-components";
import DummyImg from "../../../images/DummyImages/SaloonCard.png";
import FavoriteHeart from "../../../styles/Icons/Heart/FavoriteHeart";
import {
  AlinkTextLarge,
  PnormalTextRegular,
} from "../../../styles/Headlines/Headlines";
import { theme } from "../../../styles/themeStyles";
import Rating from "../../Rating/Rating";
import { useState } from "react";
import { IRoot } from "../../../DummyData";
import { useRatingConverter } from "../../../Hooks/useRatingConverter";

interface Props extends IRoot {
  outsideFavorite?: boolean;
  outsideSetterFav: any;
}
const CardSaloon = ({
  address,
  location,
  isFavorite,
  name,
  thumbnail,
  reviewsNumber,
  reviewsOverall,
  id,
  outsideSetterFav,
}: Props) => {
  const rating = useRatingConverter(reviewsOverall);
  return (
    <CardSaloonParent>
      <CardSaloonInner>
        <CardSaloonInnerImgDiv>
          <img
            style={{
              boxSizing: "border-box",
              minWidth: "100%",
            }}
            src={thumbnail}
            alt={name}
          />
          <FavoriteDiv
            onClick={(e) => {
              e.stopPropagation();
              outsideSetterFav(id);
            }}
          >
            <FavoriteHeart
              color={isFavorite ? theme.colors.primary.orange : "transparent"}
            />
          </FavoriteDiv>
        </CardSaloonInnerImgDiv>
        <CardSaloonInnerInfoDiv>
          <AlinkTextLarge color={theme.colors.primary.black}>
            {name}
          </AlinkTextLarge>
          <PnormalTextRegular color={theme.colors.greys[700]}>
            {address}, {location}
          </PnormalTextRegular>
          <Rating
            color={theme.colors.primary.orange}
            rating={+rating}
            reviewsNumber={reviewsNumber}
          />
        </CardSaloonInnerInfoDiv>
      </CardSaloonInner>
    </CardSaloonParent>
  );
};

export default CardSaloon;
const CardSaloonParent = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
`;
const CardSaloonInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
`;
const CardSaloonInnerImgDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  background: url(${DummyImg}) 50% / contain no-repeat, lightgray;
  position: relative;
`;
const CardSaloonInnerInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  align-self: stretch;
`;
const FavoriteDiv = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
`;
