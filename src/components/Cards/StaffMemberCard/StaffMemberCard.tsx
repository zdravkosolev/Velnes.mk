import styled from "styled-components";
import { AlinkTextLarge } from "../../../styles/Headlines/Headlines";
import { theme } from "../../../styles/themeStyles";
import Rating from "../../Rating/Rating";
import { Employee } from "../../../DummyData";
import { useRatingConverter } from "../../../Hooks/useRatingConverter";

const StaffMemberCard = ({
  avatar,
  name,
  jobTitle,
  reviewsOverall,
}: Employee) => {
  const rating = useRatingConverter(reviewsOverall);
  return (
    <StaffMemberCardParentDiv>
      <StaffMemberCardInnerImgDiv avatar={avatar} />
      <StaffMemberCardInnerInfoDiv>
        <AlinkTextLarge color={theme.colors.primary.black}>
          {name}
        </AlinkTextLarge>
        <AlinkTextLarge color={theme.colors.greys[700]}>
          {jobTitle}
        </AlinkTextLarge>
        <Rating
          showReviewsNumber={false}
          color={theme.colors.primary.orange}
          rating={+rating}
        />
      </StaffMemberCardInnerInfoDiv>
    </StaffMemberCardParentDiv>
  );
};

export default StaffMemberCard;
const StaffMemberCardParentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 125px;

  gap: 16px;
  text-align: center;
`;
const StaffMemberCardInnerImgDiv = styled.div<any>`
  width: 125px;
  height: 125px;
  flex-shrink: 0;
  border-radius: 125px;
  background: url(${(props) => props.avatar}), lightgray 50%;
  background-size: cover;
`;
const StaffMemberCardInnerInfoDiv = styled.div`
  display: flex;
  width: 105px;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  flex-shrink: 0;
`;
