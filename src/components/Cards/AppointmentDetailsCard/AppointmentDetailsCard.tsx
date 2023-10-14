import styled from "styled-components";
import {
  PnormalTextBold,
  PnormalTextRegular,
} from "../../../styles/Headlines/Headlines";
import { theme } from "../../../styles/themeStyles";
import {
  ContainerDirColAlignStartWFull,
  ContainerJCenterACenter,
  ContainerJSpaceBetweenACenter,
} from "../../../styles/Section/SectionStyled";
import { IChoosedTreatment } from "../../../Context/BookingContext/ServicesBookingProvider";

import { useRandomIncreasingPrice } from "../../../Hooks/useRandomIncreasingPrice";

const AppointmentDetailsCard = ({
  choosedEmployee,
  treatment,
  duration,
  price,
}: IChoosedTreatment) => {
  const higherPrice = useRandomIncreasingPrice(price);
  return (
    <>
      <ContainerDirColAlignStartWFull gap={theme.spacings.XXS}>
        <PnormalTextBold style={{ textTransform: "capitalize" }}>
          {treatment}
        </PnormalTextBold>
        <PnormalTextRegular>With {choosedEmployee}</PnormalTextRegular>
        <ContainerJSpaceBetweenACenter>
          <PnormalTextRegular>
            Duration:{duration === "Short-medium" ? 30 : 0}min
          </PnormalTextRegular>
          <ContainerJCenterACenter gap={theme.spacings.XXS}>
            <PnormalTextBoldModified color={theme.colors.greys[500]}>
              {higherPrice} EUR
            </PnormalTextBoldModified>
            <PnormalTextBold color={theme.colors.primary.orange}>
              {price} EUR
            </PnormalTextBold>
          </ContainerJCenterACenter>
        </ContainerJSpaceBetweenACenter>
      </ContainerDirColAlignStartWFull>
      <hr />
    </>
  );
};

export default AppointmentDetailsCard;
const PnormalTextBoldModified = styled(PnormalTextBold)`
  text-decoration: line-through;
`;
