import styled from "styled-components";
import { ALink, IconButton } from "../../../styles/Buttons/Buttons";
import { theme } from "../../../styles/themeStyles";
import PlusIcon from "../../../styles/Icons/Common/PlusIcon";
import {
  AlinkTextLarge,
  ButtonsTypo,
  H4Styled,
  PnormalTextRegular,
} from "../../../styles/Headlines/Headlines";
import { useEffect, useState } from "react";
import MoreIcon from "../../../styles/Icons/Action/MoreIcon";

import RadioButtonComponent from "../../Radiobutton/Radiobutton";
import { IService } from "../../../DummyData";
import { useRandomIncreasingPrice } from "../../../Hooks/useRandomIncreasingPrice";
import { useServicesBookingContext } from "../../../Context/BookingContext/ServicesBookingContext";
import { IChoosedTreatment } from "../../../Context/BookingContext/ServicesBookingProvider";
interface Props extends IService {
  desc?: boolean;
  discount: boolean;
}

const CardService = ({ desc = true, service, price, discount }: Props) => {
  const [isDetails, setIsDetails] = useState(false);
  const [isPlusButton, setIsPlusButton] = useState(true);
  const [choosedTreatmentDuration, setChoosedTreatmentDuration] = useState<
    "Short-medium" | "Long" | "Extra long"
  >("Short-medium");
  const { contextData, setContextData } = useServicesBookingContext();

  useEffect(() => {
    contextData.forEach((serv: IChoosedTreatment) =>
      setIsPlusButton(!(serv.treatment === service))
    );
  }, []);

  let buttonBg = isPlusButton
    ? theme.colors.secondary.lightorange
    : theme.colors.primary.orange;

  if (!isPlusButton) {
    desc = true;
  }
  const randomIncreasingPrice = useRandomIncreasingPrice(+price.short);

  const cardBookTreatment = () => {
    setContextData((prev: IChoosedTreatment[]) => [
      ...prev,
      {
        treatment: service,
        duration: choosedTreatmentDuration,
        price: price.short,
      },
    ]);
  };

  const cardDeleteBookTreatment = () => {
    setContextData((prev: IChoosedTreatment[]) =>
      prev.filter((el: IChoosedTreatment) => el.treatment !== service)
    );
  };

  return (
    <>
      <CardServiceParent>
        <CardServiceInnerUpperDiv>
          <CardServiceInnerUpperInfoDiv>
            <H4Styled style={{ textTransform: "capitalize" }}>
              {service}
            </H4Styled>
            <PnormalTextRegular>1 hr – 1 hr 25 min</PnormalTextRegular>
          </CardServiceInnerUpperInfoDiv>
          <IconButton
            bg={buttonBg}
            onClick={() => {
              setIsPlusButton((prev) => !prev);
            }}
          >
            {isPlusButton ? (
              <div
                onClick={() => {
                  cardBookTreatment();
                }}
              >
                <PlusIcon color={theme.colors.primary.orange} />
              </div>
            ) : (
              <div
                onClick={() => {
                  cardDeleteBookTreatment();
                }}
              >
                <MoreIcon color="white" />
              </div>
            )}
          </IconButton>
        </CardServiceInnerUpperDiv>

        {discount ? (
          <PriceDiscoutDiv>
            <LinkTextLargeModified color={theme.colors.greys[600]}>
              {randomIncreasingPrice} EUR
            </LinkTextLargeModified>
            <ButtonsTypo>{price.short} EUR</ButtonsTypo>
          </PriceDiscoutDiv>
        ) : (
          <ButtonsTypo>from {price.short} EUR</ButtonsTypo>
        )}
        {desc && (
          <ALink
            onClick={() => {
              setIsDetails((prev) => !prev);
            }}
            color={theme.colors.primary.orange}
          >
            {isDetails ? "Hide Details" : "Show Details"}
          </ALink>
        )}
        {isDetails && (
          <PnormalTextRegular color={theme.colors.greys[700]}>
            Have your Mani Full Works in our Shoreditch Nails Polish 'Colour of
            the Month' and take the shade home for free. Ask in-store or by
            signing up to our newsletter to find out the 'Colour of the Month'.
          </PnormalTextRegular>
        )}
        {!isPlusButton && (
          <>
            <RadioButtonComponent
              name={service}
              text="Short-medium"
              outSideSetter={setChoosedTreatmentDuration}
              outSideState={choosedTreatmentDuration}
              price={price.short}
            />
            <RadioButtonComponent
              name={service}
              text="Long"
              price={price.medium}
              outSideSetter={setChoosedTreatmentDuration}
              outSideState={choosedTreatmentDuration}
            />
            <RadioButtonComponent
              name={service}
              text="Extra long"
              price={price.long}
              outSideSetter={setChoosedTreatmentDuration}
              outSideState={choosedTreatmentDuration}
            />
          </>
        )}
      </CardServiceParent>
      <hr />
    </>
  );
};

export default CardService;

export const CardServiceParent = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
`;
export const CardServiceInnerUpperDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
`;

export const CardServiceInnerUpperInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const PriceDiscoutDiv = styled.div`
  display: flex;
  gap: 10px;
`;
export const LinkTextLargeModified = styled(AlinkTextLarge)`
  text-decoration: line-through;
`;
