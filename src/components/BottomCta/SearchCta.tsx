import styled from "styled-components";
import { ALink, IconLabelButton } from "../../styles/Buttons/Buttons";
import { theme } from "../../styles/themeStyles";

import { ButtonsTypo } from "../../styles/Headlines/Headlines";
interface Props {
  firstText: string;
  secondText: string;
  disabledButton?: boolean;
  nextHandler: () => void;
  prevHandler?: () => void;
}

const SearchCta = ({
  firstText,
  secondText,
  disabledButton = false,
  nextHandler,
  prevHandler,
}: Props) => {
  let bgButton = disabledButton
    ? theme.colors.greys[300]
    : theme.colors.primary.orange;
  let colorButton = disabledButton ? theme.colors.greys[700] : "white";
  return (
    <SearchCtaContainer>
      <div onClick={prevHandler}>
        <ALink color={theme.colors.primary.black}>{firstText}</ALink>
      </div>

      <IconLabelButton
        bg={bgButton}
        disabled={disabledButton}
        onClick={nextHandler}
      >
        <ButtonsTypo color={colorButton}>{secondText}</ButtonsTypo>
      </IconLabelButton>
    </SearchCtaContainer>
  );
};

export default SearchCta;

const SearchCtaContainer = styled.div`
  display: flex;
  padding: 16px 24px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-top: 1px solid #dadee2;
  background: #fff;
`;
