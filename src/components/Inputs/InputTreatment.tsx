import React, { useEffect, useState } from "react";
import { theme } from "../../styles/themeStyles";
import { ReactDimmer } from "react-dimmer";

import SearchIcon from "../../styles/Icons/Common/SearchIcon";
import { InputContainer, InputStyled } from "./InputSearchMain";
import { SearchModal } from "../SearchOptions/ModalSearchOptions/SearchModal";

interface Props {
  placeholder?: string;
  selectHanlder: any;
  selectedTreatment: string;
  next: boolean;
  setNext: any;
}

const InputTreatment = ({
  placeholder = "Search",
  selectHanlder,
  next,
  setNext,
  selectedTreatment,
}: Props) => {
  const [inputVal, setInputVal] = useState("");
  const [isModalOpen, setModal] = useState(false);
  const [onFocus, setOnFocus] = useState(next);

  useEffect(() => {
    setModal(false);
  }, [selectedTreatment]);

  useEffect(() => {
    setOnFocus(next);
  }, [next]);

  const focusHandler = () => {
    setOnFocus((prev) => !prev);
  };
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
  };
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setModal(true);
  };
  return (
    <>
      <InputContainer
        style={
          !onFocus
            ? { border: "1px solid #BEC3C7" }
            : { border: "2px solid #FF8D67" }
        }
        onSubmit={submitHandler}
      >
        <SearchIcon color={theme.colors.primary.black} size={24} />
        <InputStyled
          type="text"
          value={inputVal}
          placeholder={placeholder}
          onChange={inputHandler}
          autoFocus={true}
          onFocus={() => {
            focusHandler;
            setNext(true);
          }}
          onBlur={focusHandler}
        />
      </InputContainer>

      <SearchModal
        isModalOpen={isModalOpen}
        outSideInput={inputVal}
        setClientEntrance={selectHanlder}
        icon="location"
      />
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

export default InputTreatment;
