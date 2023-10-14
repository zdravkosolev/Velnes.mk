import styled from "styled-components";
import { theme } from "../themeStyles";

export const H2Styled = styled.h2`
  font-size: ${theme.typography.h2.fontSize}px;
  font-weight: ${theme.typography.h2.fontWeight};
  color:${props => props.color};
  margin:0;
`;
export const H3Styled = styled.h3`
  font-size: ${theme.typography.h3.fontSize}px;
  font-weight: ${theme.typography.h3.fontWeight};
  color: ${props => props.color};
  margin:0;
`;
export const H4Styled = styled.h4`
  font-size: ${theme.typography.h4.fontSize}px;
  font-weight: ${theme.typography.h4.fontWeight};
  color:${props => props.color};
  margin:0;
`;

export const PHelpText = styled.p`
font-size: ${theme.typography.helpText.fontSize}px;
font-weight: ${theme.typography.helpText.fontWeight};
margin:0;
color:${props => props.color};
`

export const PError = styled.p`
font-size: ${theme.typography.error.fontSize}px;
font-weight: ${theme.typography.error.fontWeight};
margin:0;
color:${props => props.color} ;
`
export const PnormalTextBold = styled.p`
font-size: ${theme.typography.normalTextBold.fontSize}px;
font-weight: ${theme.typography.normalTextBold.fontWeight};
margin:0;
color:${props => props.color} ;
`
export const Paragraph = styled.p`
font-size: ${theme.typography.paragraph.fontSize}px;
font-weight: ${theme.typography.paragraph.fontWeight};
margin:0;
color:${props => props.color} ;
`

export const PlinkTextDefault = styled.p`
font-size: ${theme.typography.linkTextDefault.fontSize}px;
font-weight: ${theme.typography.linkTextDefault.fontWeight};
margin:0;
color:${props => props.color} ;
`
export const PnormalTextRegular = styled.p`
font-size: ${theme.typography.normalTextRegular.fontSize}px;
font-weight: ${theme.typography.normalTextRegular.fontWeight};
margin:0;
color:${props => props.color} ;
`


export const AlinkTextLarge = styled.a`
font-size: ${theme.typography.linkTextLarge.fontSize}px;
font-weight: ${theme.typography.linkTextLarge.fontWeight};
margin:0;
color:${props => props.color} ;
`
export const ButtonsTypo = styled.p`
font-size: ${theme.typography.buttons.fontSize}px;
font-weight: ${theme.typography.buttons.fontWeight};
margin:0;
color:${props => props.color} ;
`
