import styled from "styled-components";
import { ALink } from "../../styles/Buttons/Buttons";
import ReviewStar from "../../styles/Icons/ListingSmall/ReviewStar";

const Rating = ({
  color,
  showReviewsNumber = true,
  reviewsNumber = 4.8,
  rating = 14,
}: {
  color: string;
  showReviewsNumber?: boolean;
  reviewsNumber?: number;
  rating?: number;
}) => {
  return (
    <RatingDiv>
      <StarsDiv color={color}>
        <ReviewStar color={color} /> {rating}
      </StarsDiv>
      &#183;
      {showReviewsNumber && (
        <ALink color={color}>{reviewsNumber} reviews</ALink>
      )}
    </RatingDiv>
  );
};

export default Rating;
const RatingDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;
const StarsDiv = styled.div`
  color: ${(props) => props.color};
  display: flex;
  align-items: center;
  gap: 2px;
`;
