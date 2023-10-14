import styled from "styled-components";
import SearchIcon from "../../Icons/Common/SearchIcon";
import { Paragraph } from "../../Headlines/Headlines";
import { theme } from "../../themeStyles";
import LocationIcon from "../../Icons/Common/LocationIcon";

interface Props {
  colorIcon?: string;
  sizeIcon?: number;
  icon?: "search" | "location";
  text: string;
  selectHandler: (e: any) => void;
}

const ModalElementButton = ({
  colorIcon = theme.colors.primary.orange,
  sizeIcon = 24,
  icon = "search",
  text,
  selectHandler,
}: Props) => {
  return (
    <ElementButtonModal
      value={text}
      onClick={() => {
        selectHandler(text);
      }}
    >
      {icon == "search" ? (
        <SearchIcon color={colorIcon} size={sizeIcon} />
      ) : (
        <LocationIcon color={colorIcon} size={sizeIcon} />
      )}

      <Paragraph style={{ textTransform: "capitalize" }}>{text}</Paragraph>
    </ElementButtonModal>
  );
};

const ElementButtonModal = styled.button`
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: white;
`;
export default ModalElementButton;
