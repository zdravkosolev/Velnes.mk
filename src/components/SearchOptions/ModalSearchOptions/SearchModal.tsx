import styled, { css } from "styled-components";

import { theme } from "../../../styles/themeStyles";
import {
  H2Styled,
  H3Styled,
  PnormalTextBold,
} from "../../../styles/Headlines/Headlines";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DropdownButton } from "../../../styles/Buttons/Buttons";
import ModalElementButton from "../../../styles/Buttons/ModalElementButton/ModalElementButton";
import FilterOptionButton from "../../../styles/Buttons/FilterOptionButton/FilterOptionButton";
import InputSearchMain from "../../Inputs/InputSearchMain";
import {
  SalonServicesCategory,
  ISalonServicesCategory,
  IRoot,
} from "../../../DummyData";
import { useUniqueArr } from "../../../Hooks/useUniqueArr";

interface Props {
  isModalOpen: boolean;
  title?: string;
  placeholder?: string;
  outSideInput?: string;
  type?: "time" | "search" | "date";
  setClientEntrance?: any;
  icon?: "search" | "location";
  locationSuggest?: boolean;
}

export const SearchModal = ({
  isModalOpen,
  title,
  placeholder,
  outSideInput,
  type = "search",
  setClientEntrance,
  locationSuggest,
}: Props) => {
  if (type === "search") {
    const [inputVal, setInputVal] = useState<string>(outSideInput || "");
    const [selectedCat, setSelectedCat] = useState("");

    const [filteredCategories, setfilteredCategories] = useState<
      ISalonServicesCategory[]
    >([]);
    const [filteredServices, setfilteredServices] = useState<string[]>([]);

    const [dataSalons, setDataSalons] = useState<IRoot[]>([]);

    const treatmentsArr = useUniqueArr(
      dataSalons.flatMap((salon) =>
        salon.services.flatMap((service) => service.service)
      )
    );

    const locationsArr = useUniqueArr(
      dataSalons.flatMap((salon) => salon.location)
    );

    useEffect(() => {
      fetch("http://localhost:5001/salons")
        .then((res) => res.json())
        .then((data) => setDataSalons(data));
    }, []);

    useEffect(() => {
      setClientEntrance(selectedCat);
    }, [selectedCat]);

    useEffect(() => {
      if (outSideInput) {
        setInputVal(outSideInput);
      }
    }, [outSideInput]);

    useEffect(() => {
      const filteredCategories = SalonServicesCategory.filter((service) =>
        service.category.toLowerCase().includes(inputVal.toLowerCase())
      );

      const filteredServices = treatmentsArr.filter((serv) =>
        serv.toLowerCase().includes(inputVal.toLowerCase())
      );
      if (locationSuggest) {
        const filteredLocation = locationsArr.filter((location) =>
          location.toLowerCase().includes(inputVal.toLowerCase())
        );
        setfilteredServices(filteredLocation);
        return;
      }

      setfilteredCategories(filteredCategories);
      setfilteredServices(filteredServices);
    }, [inputVal, dataSalons]);

    const selectHandler = (text: string) => {
      setSelectedCat(text);
    };

    return (
      <SearchModalContainer type={type} data-ismodalopen={isModalOpen}>
        <InputSearchMain
          placeholder={placeholder}
          inputVal={inputVal}
          setInputVal={setInputVal}
        />
        {locationSuggest ? (
          <>
            {filteredServices.map((location) => (
              <ModalElementButton
                key={location}
                text={location}
                icon={"location"}
                selectHandler={selectHandler}
              />
            ))}
          </>
        ) : (
          <>
            {filteredCategories.length !== 0 && (
              <H3Styled>Top categories</H3Styled>
            )}
            {filteredCategories.length === 0 &&
              filteredServices.length === 0 && (
                <H3Styled color={"red"}>Invalid Input</H3Styled>
              )}
            {filteredCategories.map((serv) => (
              <ModalElementButton
                key={serv.category}
                text={serv.category}
                icon={"location"}
                selectHandler={selectHandler}
              />
            ))}
            {filteredServices.length !== 0 && <H3Styled>Treatments</H3Styled>}
            {filteredServices.map((service) => {
              return (
                <ModalElementButton
                  key={service}
                  text={service}
                  icon={"search"}
                  selectHandler={selectHandler}
                />
              );
            })}
          </>
        )}
        {title && <H3Styled>{title}</H3Styled>}
      </SearchModalContainer>
    );
  }
  if (type === "date") {
    const [startDate, setStartDate] = useState(new Date());
    const [error, setError] = useState(false);
    const [isActive, setIsActive] = useState("");

    const onChangeHandler = (date: any) => {
      const now = new Date().getDate();

      const selectedDate = new Date(date);

      if (now > selectedDate.getDate()) {
        setError(true);
        return;
      }
      setError(false);
      const formattedDate = selectedDate.toLocaleDateString("en-GB", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });

      setClientEntrance(formattedDate);
      setIsActive("choose");
    };

    const clickHanlder = (text: string) => {
      if (text) {
        setIsActive(text);
        if (text == "Choose date" || text == "Any") {
          setClientEntrance(null);
          return;
        }
        setClientEntrance(text);
      }
    };
    return (
      <SearchModalContainer type={type} data-ismodalopen={isModalOpen}>
        <UpperCotainer>
          <H2Styled>Choose date</H2Styled>
          <ButtonsContainer>
            <FilterOptionButton
              isActive={isActive}
              clickHanlder={clickHanlder}
              text="Any"
            />
            <FilterOptionButton
              isActive={isActive}
              clickHanlder={clickHanlder}
              text="Today"
            />
            <FilterOptionButton
              isActive={isActive}
              clickHanlder={clickHanlder}
              text="Tommorow"
            />
          </ButtonsContainer>

          <FilterOptionButton
            isActive={isActive}
            clickHanlder={clickHanlder}
            text="Choose date"
          />
        </UpperCotainer>
        <CustomDatePickerWrapper>
          <div className="custom-calendar">
            <DatePicker
              selected={startDate}
              onChange={(date: any) => {
                setStartDate(date);
                onChangeHandler(date);
              }}
              inline
            />
          </div>
        </CustomDatePickerWrapper>
        {error && (
          <p style={{ color: "red" }}>Please select a valid appointment</p>
        )}
      </SearchModalContainer>
    );
  }

  if (type === "time") {
    const [isActive, setIsActive] = useState("");
    const [chooseTimeFrom, setChooseTimeFrom] = useState("");
    const [chooseTimeTo, setChooseTimeTo] = useState("");
    useEffect(() => {
      if (chooseTimeTo && chooseTimeFrom) {
        setClientEntrance(chooseTimeFrom + "-" + chooseTimeTo);
      }
    }, [chooseTimeFrom, chooseTimeTo]);

    const activeHandler = (text: string) => {
      if (text == "Any") {
        setClientEntrance(null);
      }
      setIsActive(text);
    };

    const onChangeHandlerFrom = (e: any) => {
      setIsActive("Choose time");
      setChooseTimeFrom(e.target.value);
    };

    const onChangeHandlerTo = (e: any) => {
      setIsActive("Choose time");
      setChooseTimeTo(e.target.value);
    };
    return (
      <SearchModalContainer type={type} data-ismodalopen={isModalOpen}>
        <TimeUpperContainer>
          <H2Styled>Choose time</H2Styled>
          <ButtonsContainer>
            <FilterOptionButton
              isActive={isActive}
              clickHanlder={activeHandler}
              text="Any"
            />

            <FilterOptionButton
              isActive={isActive}
              clickHanlder={activeHandler}
              text="Choose time"
            />
          </ButtonsContainer>
        </TimeUpperContainer>
        <TimeDownContainer>
          <TimeDownContainerInner>
            <PnormalTextBold color={theme.colors.primary.black}>
              From
            </PnormalTextBold>
            <DropdownButton onChange={onChangeHandlerFrom}>
              <option value="">Choose</option>
              {[
                "09:00 AM",
                "10:00 AM",
                "11:00 AM",
                "12:00 PM",
                "01:00 PM",
                "02:00 PM",
                "03:00 PM",
                "04:00 PM",
                "05:00 PM",
                "06:00 PM",
                "07:00 PM",
                "08:00 PM",
              ].map((el) => (
                <option key={el} value={el}>
                  {el}
                </option>
              ))}
            </DropdownButton>
          </TimeDownContainerInner>
          <TimeDownContainerInner>
            <PnormalTextBold color={theme.colors.primary.black}>
              To
            </PnormalTextBold>
            <DropdownButton onChange={onChangeHandlerTo}>
              <option value="">Choose</option>
              {[
                "09:00 AM",
                "10:00 AM",
                "11:00 AM",
                "12:00 PM",
                "01:00 PM",
                "02:00 PM",
                "03:00 PM",
                "04:00 PM",
                "05:00 PM",
                "06:00 PM",
                "07:00 PM",
                "08:00 PM",
              ].map((el) => (
                <option key={el} value={el}>
                  {el}
                </option>
              ))}
            </DropdownButton>
          </TimeDownContainerInner>
        </TimeDownContainer>
      </SearchModalContainer>
    );
  }
};
const TimeDownContainerInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  flex: 1 0 0;
  padding-left: 10px;
`;

const TimeUpperContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 21px;
`;

const TimeDownContainer = styled.div`
  display: flex;
  width: 314px;
  padding: 8px 0px;
  align-items: flex-start;
  gap: 16px;
`;

const CustomDatePickerWrapper = styled.div`
  width: 100%;
  font-family: Plus Jakarta Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
  min-height: 100%;

  .custom-calendar {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: end;
    min-height: 100%;
  }
  .react-datepicker {
    border: 0;
  }
  .react-datepicker__header {
    background: #fff;
    border-bottom: 0;
  }

  .react-datepicker__month-container {
    width: 100%;
  }
  .react-datepicker__week {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }
`;

const openModalStyles = css`
  transform: translateY(0%);
`;
const UpperCotainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 21px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  width: 314px;
  align-items: flex-start;
  gap: 16px;
  border-radius: 9999px;
`;
const SearchModalContainer = styled.div<any>`
  color: white;
  max-height: 90vh;
  width: 100%;
  background-color: #fff;
  color: black;
  z-index: 200;
  overflow: auto;
  transform: translateY(200%);
  transition: 0.5s;

  position: fixed;
  top: ${(props) => (props.type === "search" ? "10vh" : "auto")};
  left: 0;
  bottom: 0;

  display: flex;

  padding: 22px 24px 32px 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 23px;
  flex-shrink: 0;
  border-radius: 26px 26px 0px 0px;
  border: 1px solid rgba(255, 141, 103, 0.2);
  background: #fff;

  box-shadow: 0px 2px 18px 0px rgba(255, 141, 103, 0.2);

  &[data-ismodalopen="true"] {
    ${openModalStyles}
  }
`;
