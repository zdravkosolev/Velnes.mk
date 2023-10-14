import styled from "styled-components";
import { PnormalTextBold } from "../../styles/Headlines/Headlines";
import { theme } from "../../styles/themeStyles";
import { useEffect, useState } from "react";
import { ReactDimmer } from "react-dimmer";
import { SearchModal } from "./ModalSearchOptions/SearchModal";

interface Props {
  firstText: string;
  secondText: string;
  modalTitle?: string;
  modalInputPlaceholder?: string;
  type?: "search" | "date" | "time";
  next: boolean;
  setNext: any;
  locationSuggest?: boolean;
  setFilterResults?: any;
}
const SearchOptions = ({
  firstText,
  secondText,
  modalTitle,
  modalInputPlaceholder,
  type,
  next,
  setNext,
  locationSuggest = false,
  setFilterResults,
}: Props) => {
  const [isModalOpen, setModal] = useState(next);

  const [clientEntrance, setClientEntrance] = useState(null);

  useEffect(() => {
    setModal(false);
    if (setFilterResults) {
      setFilterResults((prev: any) => ({ ...prev, date: clientEntrance }));
    }
  }, [clientEntrance]);

  useEffect(() => {
    setModal(next);
  }, [next]);

  const ModalHandler = () => {
    setModal(true);
    setNext(true);
  };

  return (
    <>
      <FilterContainer onClick={ModalHandler}>
        <PnormalTextBold color={theme.colors.greys[700]}>
          {firstText}
        </PnormalTextBold>
        <PnormalTextBold
          color={theme.colors.primary.black}
          style={{ textTransform: "capitalize" }}
        >
          {clientEntrance ? clientEntrance : secondText}
        </PnormalTextBold>

        <SearchModal
          isModalOpen={isModalOpen}
          title={modalTitle}
          placeholder={modalInputPlaceholder}
          type={type}
          setClientEntrance={setClientEntrance}
          icon="location"
          locationSuggest={locationSuggest}
        />
      </FilterContainer>
      <ReactDimmer
        isOpen={isModalOpen}
        exitDimmer={setModal}
        zIndex={100}
        transition={0.4}
        opacity={0}
      />
    </>
  );
};

export default SearchOptions;
const FilterContainer = styled.div`
  display: flex;
  width: 358px;
  padding: 26px 24px;
  justify-content: space-between;
  align-items: center;
  border-radius: 16px;
  border: 1px solid rgba(255, 141, 103, 0.2);
  background: #fff;

  box-shadow: 0px 1px 2px 0px rgba(255, 141, 103, 0.08);
`;
