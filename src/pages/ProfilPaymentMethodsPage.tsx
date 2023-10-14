import Titlebar from "../components/Titlebar/Titlebar";
import {
  ContainerAlignCenter,
  ContainerInlineFDirColAlignStart,
  PageContainerPrimary,
} from "../styles/Section/SectionStyled";
import { H2Styled, Paragraph } from "../styles/Headlines/Headlines";
import { theme } from "../styles/themeStyles";
import { IconButton } from "../styles/Buttons/Buttons";
import PlusIcon from "../styles/Icons/Common/PlusIcon";
import PaymentsMethod from "../components/PaymentsMethods/PaymentsMethod";
import { useNavigate } from "react-router";
import { userCard } from "../DummyData";

const ProfilPaymentMethodsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Titlebar icons={false} headline="" bg="white" />
      <PageContainerPrimary gap={theme.spacings.XL}>
        <ContainerInlineFDirColAlignStart gap={theme.spacings.XS}>
          <H2Styled color={theme.colors.primary.brown}>
            Payment methods
          </H2Styled>
          <Paragraph>
            Securely save your card details for hastle-free payments.
          </Paragraph>
        </ContainerInlineFDirColAlignStart>
        <ContainerAlignCenter gap={theme.spacings.XS * 2}>
          <IconButton
            bg={theme.colors.secondary.lightorange}
            onClick={() => navigate("add-card")}
          >
            <PlusIcon color={theme.colors.primary.orange} />
          </IconButton>
          <Paragraph>Add card</Paragraph>
        </ContainerAlignCenter>
        {userCard.map((card) => (
          <PaymentsMethod
            key={card.cardNumber}
            cardName={card.cardName}
            cardNumber={card.cardNumber}
          />
        ))}
      </PageContainerPrimary>
    </>
  );
};

export default ProfilPaymentMethodsPage;
