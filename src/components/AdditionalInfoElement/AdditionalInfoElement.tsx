import { PlinkTextDefault } from "../../styles/Headlines/Headlines";
import PlaceholderIcon from "../../styles/Icons/Common/PlaceholderIcon";
import { theme } from "../../styles/themeStyles";
import { ContainerAlignCenter } from "../../styles/Section/SectionStyled";
interface Props {
  placeholderColor?: string;
  text: string;
}
const AdditionalInfoElement = ({
  placeholderColor = `${theme.colors.greys[700]}`,
  text,
}: Props) => {
  return (
    <ContainerAlignCenter>
      <PlaceholderIcon color={placeholderColor} />
      <PlinkTextDefault>{text}</PlinkTextDefault>
    </ContainerAlignCenter>
  );
};

export default AdditionalInfoElement;
