import styled from "styled-components";
import { theme } from "../../themeStyles";
import { IconButton } from "../Buttons";

interface Props {
  category: string;
  icon: any;
  navigateHandler: any;
  colorBtn?: boolean;
  indicatorBoolean?: boolean;
}

const CategoryButton = ({
  category,
  icon,
  navigateHandler,
  colorBtn = false,
  indicatorBoolean = false,
}: Props) => {
  return (
    <CatergoryButton onClick={navigateHandler}>
      {indicatorBoolean && <Indicator />}
      <IconButton
        bg={colorBtn ? theme.colors.primary.lightorange : "white"}
        color={"black"}
      >
        {icon}
      </IconButton>
      <span>{category}</span>
    </CatergoryButton>
  );
};

export default CategoryButton;
const CatergoryButton = styled.div<any>`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  background-color: ${(props) => props.bg};
  position: relative;
  span {
    font-size: ${theme.typography.linkTextDefault.fontSize}px;
    font-weight: ${theme.typography.linkTextDefault.fontWeight};
    color: ${theme.colors.primary.brown};
  }
`;
const Indicator = styled.div`
  position: absolute;
  background-color: ${theme.colors.primary.orange};
  border-radius: 50%;
  width: 16px;
  height: 16px;
  right: 3px;
  top: 0px;
  z-index: 100;
`;
