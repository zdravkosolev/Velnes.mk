import styled, { css } from "styled-components";
import { H3Styled, Paragraph } from "../../styles/Headlines/Headlines";
import MoreIcon from "../../styles/Icons/Action/MoreIcon";
import { theme } from "../../styles/themeStyles";
import { useState } from "react";
import { ReactDimmer } from "react-dimmer";
import SearchCta from "../BottomCta/SearchCta";
import {
  ContainerDirColAlignStart,
  ContainerJSpaceBetweenAStart,
} from "../../styles/Section/SectionStyled";

interface Props {
  cardName: "Visa" | "Mastercard";
  cardNumber: number;
}
const PaymentsMethod = ({ cardName, cardNumber }: Props) => {
  const [isModalDelete, setIsModalDelete] = useState(false);
  const [clickedCardNumber, setClickedCardNumber] = useState<number>();
  let cardNumberFirst12ToStars = Array.from(cardNumber.toString().slice(0, 12))
    .fill("*")
    .join("");
  let cardNumberLast4 = cardNumber.toString().slice(12, 16);

  const splittedStars = cardNumberFirst12ToStars
    .toString()
    .match(/.{1,4}/g)
    ?.join(" ");

  let concatStrings = splittedStars + " " + cardNumberLast4;

  return (
    <>
      <PaymentsMethodContainer>
        <PaymentsMethodContainerInner>
          <Paragraph color={theme.colors.primary.black}>{cardName}</Paragraph>
          <PaymentsMethodContainerInnerNumberDiv>
            <Paragraph color={theme.colors.primary.black}>
              {concatStrings}
            </Paragraph>
            <div
              onClick={() => {
                setIsModalDelete(true);
                console.log(clickedCardNumber);

                setClickedCardNumber(cardNumber);
                console.log(clickedCardNumber);
              }}
            >
              <MoreIcon color={theme.colors.primary.black} />
            </div>
          </PaymentsMethodContainerInnerNumberDiv>
        </PaymentsMethodContainerInner>
      </PaymentsMethodContainer>
      <ConfirmationModalContainer data-ismodalopen={isModalDelete}>
        <ContainerDirColAlignStart gap={theme.spacings.XS * 2}>
          <ContainerJSpaceBetweenAStart>
            <H3Styled>{cardName}</H3Styled>
            <H3Styled>{concatStrings}</H3Styled>
          </ContainerJSpaceBetweenAStart>
          <Paragraph>Expiration 04/25</Paragraph>
        </ContainerDirColAlignStart>
        <BottomCtaDiv>
          <SearchCta
            firstText="Cancel"
            secondText="Delete"
            nextHandler={() => {
              setIsModalDelete(false);
            }}
            prevHandler={() => {
              setIsModalDelete(false);
            }}
          />
        </BottomCtaDiv>
      </ConfirmationModalContainer>
      <ReactDimmer
        isOpen={isModalDelete}
        exitDimmer={setIsModalDelete}
        zIndex={100}
        transition={0.4}
        opacity={0.6}
      />
    </>
  );
};

export default PaymentsMethod;
const PaymentsMethodContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 19px 15px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 12px;
  background: #f5f6f7;
`;
const PaymentsMethodContainerInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;
const PaymentsMethodContainerInnerNumberDiv = styled.div`
  display: flex;
  width: 195.5px;
  justify-content: space-between;
  align-items: center;
`;
const openModalStyles = css`
  transform: translateY(0%);
`;
const ConfirmationModalContainer = styled.div`
  position: fixed;
  top: 40vh;
  width: 100%;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 90vh;
  gap: 32px;
  z-index: 9999;

  overflow: auto;
  padding-top: 20px;
  padding: 22px 24px 32px 24px;
  border-radius: 26px 26px 0px 0px;
  background: #fff;
  transform: translateY(200%);
  transition: 0.5s;

  &[data-ismodalopen="true"] {
    ${openModalStyles}
  }
`;
const BottomCtaDiv = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 1000;
`;
