import { FilterOption } from "../Buttons";
import { PnormalTextBold } from "../../Headlines/Headlines";
import { theme } from "../../themeStyles";

interface Props {
  text: string;
  clickHanlder: (text: string) => void;
  isActive: string;
}

const FilterOptionButton = ({ clickHanlder, text, isActive }: Props) => {
  return (
    <FilterOption
      value={text}
      onClick={() => {
        clickHanlder(text);
      }}
      color={`${isActive == text && theme.colors.primary.orange} `}
    >
      <PnormalTextBold color={theme.colors.primary.black}>
        {text}
      </PnormalTextBold>
    </FilterOption>
  );
};

export default FilterOptionButton;
