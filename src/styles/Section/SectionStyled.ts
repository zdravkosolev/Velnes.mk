import styled from "styled-components";
import { theme } from "../themeStyles";

export const SectionStyled = styled.section`
  margin-top: ${theme.spacings.XL * 2}px;
`;

export const ContainerDirColAlignStart = styled.div<any>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: ${props => (props.gap ? props.gap + 'px' : '24px')};
`;
export const ContainerDirColAlignStartWFull = styled.div<any>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width:100%;
  gap: ${props => (props.gap ? props.gap + 'px' : '24px')};
`;


export const ContainerInlineFDirColAlignStart = styled.div<any>`
display: inline-flex;
flex-direction: column;
align-items: flex-start;
  min-width:100%;
  gap: ${props => (props.gap ? props.gap + 'px' : '40px')};
`;
export const ContainerAlignCenter = styled.div<any>`
  display: flex;
  align-items: center;
 
  gap: ${props => (props.gap ? props.gap + 'px' : '10px')};
`;
export const ContainerAlignCenterWFull = styled.div<any>`
  display: flex;
  align-items: center;
  min-width:100%;
  gap: ${props => (props.gap ? props.gap + 'px' : '10px')};
`;
export const ContainerJCenterACenter = styled.div<any>`
display: flex;
justify-content: center;
align-items: center;

  gap: ${props => (props.gap ? props.gap + 'px' : '10px')};
`;
export const ContainerJSpaceBetweenACenter = styled.div<any>`
display: flex;
justify-content: space-between;
align-items: center;
min-width:100%;
align-self: stretch;
  gap: ${props => (props.gap ? props.gap + 'px' : '1px')};
`;


export const ContainerJSpaceBetweenAStart = styled.div<any>`
display: flex;
justify-content: space-between;
align-items: flex-start;
align-self: stretch;
min-width:100%;
  gap: ${props => (props.gap ? props.gap + 'px' : '1px')};
`;

export const ContainerInlineFFDirColAlignCenter = styled.div<any>`

display: inline-flex;
min-width:100%;
flex-direction: column;
align-items: center;

flex-shrink: 0;
  gap: ${props => (props.gap ? props.gap + 'px' : '24px')};
`;
export const ContainerFDirColItemsCenter = styled.div<any>`

display: flex;
flex-direction: column;
align-items: center;
max-width: 100%;
  gap: ${props => (props.gap ? props.gap + 'px' : '24px')};
`;
export const PageContainerPrimary = styled.div<any>`
padding: 20px;

display: flex;
min-height: 90vh;
flex-direction: column;
align-items: flex-start;
  gap: ${props => (props.gap ? props.gap + 'px' : '24px')};

  padding-bottom: ${props => (props.pbot ? props.pbot + 'px' : '1px')};
`;
