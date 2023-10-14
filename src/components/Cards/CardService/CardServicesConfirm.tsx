import { IconButton } from "../../../styles/Buttons/Buttons";
import { theme } from "../../../styles/themeStyles";
import PlusIcon from "../../../styles/Icons/Common/PlusIcon";
import {
  ButtonsTypo,
  H4Styled,
  PnormalTextRegular,
} from "../../../styles/Headlines/Headlines";
import { useEffect, useState } from "react";

import {
  CardServiceInnerUpperDiv,
  CardServiceInnerUpperInfoDiv,
  CardServiceParent,
} from "./CardService";
import CheckIcon from "../../../styles/Icons/Common/CheckIcon";
interface Props {
  price: number;
  service: string;
  isCheckStateSetterTreatmentArr: any;
}

const CardServicesConfirm = ({
  service,
  price,
  isCheckStateSetterTreatmentArr,
}: Props) => {
  const [isPlusButton, setIsPlusButton] = useState(true);

  useEffect(() => {
    if (!isPlusButton) {
      isCheckStateSetterTreatmentArr((prev: string[]) => [...prev, service]);
    } else {
      isCheckStateSetterTreatmentArr((prev: string[]) => [...prev, service]);
      isCheckStateSetterTreatmentArr((prev: string[]) =>
        prev.filter((el: string) => el !== service)
      );
    }
  }, [isPlusButton]);

  let buttonBg = isPlusButton
    ? theme.colors.secondary.lightorange
    : theme.colors.primary.orange;

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
              <PlusIcon color={theme.colors.primary.orange} />
            ) : (
              <CheckIcon color="white" />
            )}
          </IconButton>
        </CardServiceInnerUpperDiv>

        <ButtonsTypo>from {price} EUR</ButtonsTypo>
      </CardServiceParent>
      <hr />
    </>
  );
};
export default CardServicesConfirm;
