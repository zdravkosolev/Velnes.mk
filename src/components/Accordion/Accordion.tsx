import styled from "styled-components";
import { H3Styled, PnormalTextRegular } from "../../styles/Headlines/Headlines";
import { useState } from "react";
import UpSmallArrowIcon from "../../styles/Icons/Arrows/UpSmallArrowIcon";
import DownSmallArrowIcon from "../../styles/Icons/Arrows/DownSmallArrowIcon";
import { theme } from "../../styles/themeStyles";
interface Props {
  headline: string;
  text?: string;
  headlineColor?: string;
}
const Accordion = ({
  headline,
  text,
  headlineColor = `${theme.colors.primary.brown}`,
}: Props) => {
  text =
    "This business enforces a cancellation policy on select services and reserves the right to charge a cancellation fee for any no-shows and late cancellations. Note that you may be considered a no-show if you are late for your scheduled appointment, and it is up to the business to decide whether the fee is applied.";
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>
        <AccordionContainer
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          <H3Styled color={headlineColor}>{headline}</H3Styled>
          {isOpen ? <UpSmallArrowIcon /> : <DownSmallArrowIcon />}
        </AccordionContainer>
        {isOpen && <PnormalTextRegular>{text}</PnormalTextRegular>}
      </div>
      <hr />
    </>
  );
};

export default Accordion;

const AccordionContainer = styled.div`
  display: flex;
  width: 342px;
  justify-content: space-between;
  align-items: center;
`;
