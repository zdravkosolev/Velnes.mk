import { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "../../styles/themeStyles";

const InputNumber = ({ continueHandler }: { continueHandler: any }) => {
  const [onFocus, setOnFocus] = useState(false);
  const [inputVal, setInputVal] = useState("");

  let colorOutline;
  useEffect(() => {
    colorOutline = onFocus
      ? theme.colors.primary.orange
      : theme.colors.greys[500];
  }, [onFocus]);

  return (
    <InputNumberCon
      outline={colorOutline}
      type="number"
      value={inputVal}
      onChange={(e: any) => {
        if (inputVal.length === 0) {
          setInputVal(e.target.value);
          continueHandler(false);
        }
      }}
      onFocus={() => {
        setOnFocus((prev) => !prev);
      }}
    ></InputNumberCon>
  );
};

export default InputNumber;

const InputNumberCon = styled.input<any>`
  display: flex;
  width: 51px;
  height: 58px;
  padding: 17px 8px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  color: #0d0d0d;
  text-align: center;
  font-family: Plus Jakarta Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid ${(props) => props.outline};
  background: #fff;
`;
