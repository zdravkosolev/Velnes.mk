import styled from "styled-components";
import Titlebar from "../components/Titlebar/Titlebar";
import {
  ContainerAlignCenter,
  ContainerDirColAlignStart,
  ContainerDirColAlignStartWFull,
  ContainerInlineFDirColAlignStart,
  ContainerJCenterACenter,
  ContainerJSpaceBetweenAStart,
  PageContainerPrimary,
} from "../styles/Section/SectionStyled";
import {
  ButtonsTypo,
  H2Styled,
  H3Styled,
  PHelpText,
  PnormalTextBold,
  PnormalTextRegular,
} from "../styles/Headlines/Headlines";
import { theme } from "../styles/themeStyles";
import CalendarIcon from "../styles/Icons/Common/CalendarIcon";
import EditAltIcon from "../styles/Icons/Common/EditAltIcon";
import AppointmentDetailsCard from "../components/Cards/AppointmentDetailsCard/AppointmentDetailsCard";
import { PrimaryButtonFull } from "../styles/Buttons/Buttons";
import Accordion from "../components/Accordion/Accordion";
import InputDefault from "../components/Inputs/InputDefault";
import RadioPayment from "../components/Radiobutton/RadioPayment";
import PaymentCells from "../components/Inputs/PaymentCells";
import CheckboxRow from "../components/Checkboxes/CheckboxRow";
import DoubleLeftCta from "../components/BottomCta/DoubleLeftCta";
import { useNavigate, useParams } from "react-router";
import InputDropdown from "../components/Inputs/InputDropdown";
import { useEffect, useState } from "react";
import { IRoot } from "../DummyData";
import { useServicesBookingContext } from "../Context/BookingContext/ServicesBookingContext";
import { IChoosedTreatment } from "../Context/BookingContext/ServicesBookingProvider";
import { useRandomIncreasingPrice } from "../Hooks/useRandomIncreasingPrice";
import { useSalonsDataContext } from "../Context/SalonsDataContext/SalonsDataContext";

const ReviewAndConfirmPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [findedSalon, setFindedSalon] = useState<IRoot>();
  const { contextData } = useServicesBookingContext();
  const { salonsData } = useSalonsDataContext();
  const currentMonth = new Date().toLocaleString("default", { month: "long" });

  const higherSumPrice = useRandomIncreasingPrice(
    contextData?.reduce(
      (total: number, serv: IChoosedTreatment) => total + serv.price,
      0
    )
  );
  useEffect(() => {
    if (id) {
      setFindedSalon(salonsData.find((salon: IRoot) => salon.id == +id));
    }
  }, [id, salonsData]);

  const putData = async () => {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...findedSalon,
        appointments: contextData,
      }),
    };

    const response = await fetch(
      `http://localhost:5001/salons/${id}`,
      requestOptions
    );
    const newData = await response.json();
    console.log(newData);
  };

  return (
    <>
      <Titlebar headline="" icons={false} bg={"white"} />
      <PageContainerPrimary pbot={theme.spacings.XXL * 2}>
        <H2Styled color={theme.colors.primary.brown}>
          Review and confirm
        </H2Styled>
        <ContainerDirColAlignStart gap={theme.spacings.XS}>
          <ContainerAlignCenter gap={theme.spacings.XS}>
            <ContainerFirstImgDiv thumbnail={findedSalon?.thumbnail} />
            <PnormalTextBold>{findedSalon?.name}</PnormalTextBold>
          </ContainerAlignCenter>

          <ContainerAlignCenter gap={theme.spacings.XS}>
            <CalendarIcon color={theme.colors.greys[700]} />
            <PnormalTextRegular>{`${contextData[0].choosedDate.day} ${contextData[0].choosedDate.date} ${currentMonth},${contextData[0].choosedTime} `}</PnormalTextRegular>
            <div
              onClick={() => {
                navigate(`/salon/${id}/services/booking`);
              }}
            >
              <EditAltIcon color={theme.colors.greys[700]} />
            </div>
          </ContainerAlignCenter>
        </ContainerDirColAlignStart>
        <ContainerDirColAlignStartWFull gap={theme.spacings.XS}>
          {contextData.map((serv: IChoosedTreatment) => (
            <AppointmentDetailsCard key={serv.treatment} {...serv} />
          ))}
          <PnormalTextRegular color={theme.colors.greys[700]}>
            Total treatment time: {contextData.length * 30} minutes
          </PnormalTextRegular>
        </ContainerDirColAlignStartWFull>
        <ContainerDirColAlignStartWFull gap={theme.spacings.XXS}>
          <ContainerJSpaceBetweenAStart>
            <PnormalTextRegular color={theme.colors.greys[700]}>
              Sign in to earn points
            </PnormalTextRegular>
            <PnormalTextRegular color={theme.colors.greys[700]}>
              14
            </PnormalTextRegular>
          </ContainerJSpaceBetweenAStart>

          <ContainerJSpaceBetweenAStart>
            <PnormalTextBold>Total</PnormalTextBold>
            <ContainerJCenterACenter gap={theme.spacings.XXS}>
              <PnormalTextBoldModified color={theme.colors.greys[700]}>
                {higherSumPrice}
                EUR
              </PnormalTextBoldModified>
              <PnormalTextBold color={theme.colors.primary.orange}>
                {contextData?.reduce(
                  (total: number, serv: IChoosedTreatment) =>
                    total + serv.price,
                  0
                )}{" "}
                EUR
              </PnormalTextBold>
            </ContainerJCenterACenter>
          </ContainerJSpaceBetweenAStart>
        </ContainerDirColAlignStartWFull>
        <PrimaryButtonFull
          color={theme.colors.primary.brown}
          outline={theme.colors.primary.orange}
          bg="white"
          onClick={() => {
            navigate("/signin");
          }}
        >
          <ButtonsTypo>Sign in</ButtonsTypo>
        </PrimaryButtonFull>
        <PHelpTextModified color={theme.colors.greys[700]}>
          Or continue as guest
        </PHelpTextModified>
        <ContainerInlineFDirColAlignStart gap={theme.spacings.M}>
          <H3Styled color={theme.colors.primary.brown}>
            Personal information
          </H3Styled>
          <InputDefault inputType={"text"} placeholder="First name" />
          <InputDefault inputType={"text"} placeholder="Last name" />
          <InputDefault inputType={"date"} placeholder="Birth" />

          <InputDropdown
            options={["Male", "Female", "Prefer not to say"]}
            placeholder="Gender"
          />
          <InputDefault inputType={"email"} placeholder="Email" />
          <InputDefault inputType={"phone"} placeholder="Phone number" />
        </ContainerInlineFDirColAlignStart>
        <ContainerInlineFDirColAlignStart gap={theme.spacings.M}>
          <H3Styled color={theme.colors.primary.brown}>Payment</H3Styled>
          <RadioPayment
            title="Card"
            subTitle="Pay online"
            name="payment"
            icon={true}
          />
          <RadioPayment
            title="Google pay"
            subTitle="Pay online"
            name="payment"
            icon={true}
          />
          <RadioPayment title="Pay at the venue" name="payment" />
          <WarningDiv>
            <PHelpText color={theme.colors.primary.orange}>
              You will receive a full refund if you cancel right now
            </PHelpText>
          </WarningDiv>
          <ContainerDirColAlignStart gap={theme.spacings.M}>
            <PnormalTextBold>Enter card details</PnormalTextBold>
            <PaymentCells
              fPlaceholder="Card number"
              sPlaceholder="Expiration"
              tPlaceholder="CVV"
            />
          </ContainerDirColAlignStart>
        </ContainerInlineFDirColAlignStart>
        <ContainerInlineFDirColAlignStart gap={theme.spacings.M}>
          <H3Styled color={theme.colors.primary.brown}>
            Add gift card or promo code
          </H3Styled>
          <InputDefault inputType={"number"} placeholder="Enter Number" />
          <PrimaryButtonFull bg={theme.colors.primary.orange}>
            <ButtonsTypo color="white">Add code</ButtonsTypo>
          </PrimaryButtonFull>
        </ContainerInlineFDirColAlignStart>
        <Accordion
          headline="Reschedule & cancellation"
          text="If your plans change, you can reschedule your booking up to 1 hour before your appointment."
        />
        <ContainerInlineFDirColAlignStart gap={16}>
          <H3Styled color={theme.colors.primary.brown}>
            Receive updates from Velnes
          </H3Styled>
          <CheckboxRow text="I want to subscribe to weekly Newsletter" />
          <CheckboxRow text="I want to receive marketing emails and SMS from this venue" />
          <PHelpText>
            Unsubscribe by clicking the ‘unsubscribe’ link in any of the emails,
            or contact your venue directly about the emails they send and how
            they use your personal information. Read more about it in our
            <CustomSpan color={theme.colors.primary.orange}>
              {"  "}
              Privacy Policy.
            </CustomSpan>
          </PHelpText>
          <PHelpText>
            By continuing you agree to our
            <CustomSpan color={theme.colors.primary.orange}>
              Booking Terms.
            </CustomSpan>
          </PHelpText>
        </ContainerInlineFDirColAlignStart>
      </PageContainerPrimary>
      <BottomCtaDiv>
        <DoubleLeftCta
          firstText={`${contextData?.length} services`}
          secondText="Checkout"
          price={contextData?.reduce(
            (total: number, serv: IChoosedTreatment) => total + serv.price,
            0
          )}
          nextHandler={() => {
            putData();
            navigate("confirmation");
          }}
        />
      </BottomCtaDiv>
    </>
  );
};

export default ReviewAndConfirmPage;

const BottomCtaDiv = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 1000;
`;
const ContainerFirstImgDiv = styled.div<any>`
  display: flex;
  min-width: 58px;
  min-height: 52px;

  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background: url(${(props) => props.thumbnail}), lightgray 50%;
  background-size: cover;
`;
const PnormalTextBoldModified = styled(PnormalTextBold)`
  text-decoration: line-through;
`;

const PHelpTextModified = styled(PHelpText)`
  margin: 0 auto;
`;
export const WarningDiv = styled.div`
  display: flex;
  padding: 10px;
  justify-content: center;
  width: 100%;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  background: #fff3f0;
`;
const CustomSpan = styled.span`
  color: ${(props) => props.color};
  text-decoration: underline;
`;
