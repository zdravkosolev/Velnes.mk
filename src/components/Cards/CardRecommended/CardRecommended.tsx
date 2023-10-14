import styled from "styled-components";
import {
  H4Styled,
  PError,
  PHelpText,
} from "../../../styles/Headlines/Headlines";

import { theme } from "../../../styles/themeStyles";
import ReviewStar from "../../../styles/Icons/ListingSmall/ReviewStar";
import FavoriteHeart from "../../../styles/Icons/Heart/FavoriteHeart";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { IReviewsOverall, IRoot } from "../../../DummyData";
import { useRatingConverter } from "../../../Hooks/useRatingConverter";
import { useSalonsDataContext } from "../../../Context/SalonsDataContext/SalonsDataContext";

interface Props {
  id: number;
  name: string;
  category: string;
  thumbnail: string;
  reviewsOverall: IReviewsOverall;
  reviewsNumber: number;
  isFavorite?: boolean;
}

const CardRecommended = ({
  reviewsOverall,
  isFavorite,
  thumbnail,
  name,
  reviewsNumber,
  category,
  id,
}: Props) => {
  const [isFavoriteState, setisFavoriteState] = useState<boolean | undefined>(
    isFavorite
  );

  const navigate = useNavigate();

  const rating = useRatingConverter(reviewsOverall);

  const { setSalonsData } = useSalonsDataContext();

  const putData = async () => {
    const existingResponse = await fetch(`http://localhost:5001/salons/${id}`);
    const existingData = await existingResponse.json();

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...existingData,
        isFavorite: !existingData.isFavorite,
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
    setisFavoriteState(newData.isFavorite);

    setSalonsData((prevSalonsData: IRoot[]) => {
      return prevSalonsData.map((salon) => {
        if (salon.id === id) {
          return { ...salon, isFavorite: !salon.isFavorite };
        } else {
          return salon;
        }
      });
    });
  };

  return (
    <CardRecommendedStyledDiv
      onClick={(e) => {
        e.stopPropagation();
        navigate(`/salon/${id}`);
        window.scrollTo(0, 0);
      }}
    >
      <CardRecommendedStyledDivImg img={thumbnail}>
        <div
          onClick={(e) => {
            e.stopPropagation();
            putData();
          }}
        >
          <FavoriteHeart
            color={
              isFavoriteState ? theme.colors.primary.orange : "transparent"
            }
          />
        </div>
      </CardRecommendedStyledDivImg>
      <CardRecommendedStyledDivDesc>
        <H4Styled>{name}</H4Styled>
        <PError color={theme.colors.primary.orange}>
          <ReviewStar color={theme.colors.primary.orange} />
          {rating} <span>&#183;</span>{" "}
          <SpanTagReview>{reviewsNumber} reviwes</SpanTagReview>
        </PError>

        <PHelpText color={theme.colors.primary.black}>{category}</PHelpText>
      </CardRecommendedStyledDivDesc>
    </CardRecommendedStyledDiv>
  );
};

export default CardRecommended;
const CardRecommendedStyledDiv = styled.div`
  width: 270px;
  height: 230px;
`;
const CardRecommendedStyledDivDesc = styled.div`
  display: flex;
  padding: 12px;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;

  border-radius: 0px 0px 12px 12px;
  background: #fff;
  z-index: 1111;
`;
const CardRecommendedStyledDivImg = styled.div<any>`
  display: flex;
  justify-content: flex-end;
  padding: 15px;
  width: 270px;
  height: 230px;
  background: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
const SpanTagReview = styled.span`
  color: ${theme.colors.greys[700]};
  font-size: 12px;
  font-weight: 400;
`;
