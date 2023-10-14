import styled from "styled-components";
import { theme } from "../../../styles/themeStyles";
import {
  H4Styled,
  PHelpText,
  Paragraph,
  PlinkTextDefault,
  PnormalTextBold,
} from "../../../styles/Headlines/Headlines";
import ReviewStar from "../../../styles/Icons/ListingSmall/ReviewStar";
import { ALink } from "../../../styles/Buttons/Buttons";
import { useState } from "react";
import ProfileIcon from "../../../styles/Icons/Common/UserIcon";
interface Props {
  userName: string;
  avatar: string;
  datePosted: string;
  reviewRate: number;
  comment: string;
  staff: string;
  services: string[];
}
const CardReview = ({
  userName,
  avatar,
  comment,
  datePosted,
  reviewRate,
  staff,
  services,
}: Props) => {
  const paragraph = comment;
  const words = paragraph.split(" ");
  const isLongerParagraph = words.length > 10;
  const [showReadMore, setShowReadMore] = useState(isLongerParagraph);

  let paragraphShort;
  if (isLongerParagraph) {
    paragraphShort = words.slice(0, 10).join(" ") + "...";
    
  }

  const showMoreHandler = () => {
    setShowReadMore((prev) => !prev);
   
  };
  return (
    <CardReviewContainer>
      <CardReviewInnerUp>
        <CardReviewInnerUpInfoParentDiv>
          <CardReviewInnerUpInfoAvatar avatar={avatar} />
          <CardReviewInnerUpInfoDesc>
            <H4Styled>{userName}</H4Styled>
            <PHelpText color={theme.colors.greys[700]}>{datePosted}</PHelpText>
          </CardReviewInnerUpInfoDesc>
        </CardReviewInnerUpInfoParentDiv>
        <CardReviewInnerUpReviewDiv>
          <PnormalTextBold color={theme.colors.primary.orange}>
            <ReviewStar color={theme.colors.primary.orange} /> {reviewRate}
          </PnormalTextBold>
        </CardReviewInnerUpReviewDiv>
      </CardReviewInnerUp>
      <CardReviewInnerDown>
        <CardReviewInnerDownTextDiv>
          <Paragraph>{showReadMore ? paragraphShort : paragraph}</Paragraph>
          {showReadMore && (
           
            <ALink
              onClick={showMoreHandler}
              color={theme.colors.primary.orange}
            >
              Read More
            </ALink>
          )}
        </CardReviewInnerDownTextDiv>
        <CardReviewInnerDownBadgesDiv>
          <CardReviewInnerDownBadgesLeft>
            <ProfileIcon size={17} color={theme.colors.greys[700]} />
            <PlinkTextDefault color={theme.colors.greys[700]}>
              Staff:{staff}
            </PlinkTextDefault>
          </CardReviewInnerDownBadgesLeft>
          <CardReviewInnerDownBadgesRight>
            {services.map((serv) => (
              <ExtendedPHelpText key={serv}>{serv}</ExtendedPHelpText>
            ))}
          </CardReviewInnerDownBadgesRight>
        </CardReviewInnerDownBadgesDiv>
      </CardReviewInnerDown>
    </CardReviewContainer>
  );
};

export default CardReview;
const CardReviewContainer = styled.div`
  display: inline-flex;
  padding: ${theme.spacings.XS * 2}px ${theme.spacings.M}px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 12px;
  background: #fff;
  width: 273px;
`;
const CardReviewInnerUp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
`;

const CardReviewInnerUpInfoParentDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
const CardReviewInnerUpInfoDesc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

const CardReviewInnerUpInfoAvatar = styled.div<any>`
  width: 42px;
  height: 42px;
  border-radius: 42px;
  background: url(${(props) => props.avatar});
  background-size: cover;
`;
const CardReviewInnerUpReviewDiv = styled.div`
  display: flex;
  height: 19px;
  align-items: center;
  gap: 8px;
`;
const CardReviewInnerDown = styled.div`
  display: flex;
  height: 170px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;
const CardReviewInnerDownTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: auto;
  gap: 10px;
  height: 114px;
`;
const CardReviewInnerDownBadgesDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  margin-bottom: 10px;
`;
const CardReviewInnerDownBadgesLeft = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  gap: 5px;
`;
const CardReviewInnerDownBadgesRight = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 5px;
  max-width: 150px;
`;

const ExtendedPHelpText = styled(PHelpText)`
  display: flex;
  padding: 4px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 13px;
  border: 1px solid #bec2c7;
  text-align: center;
`;
