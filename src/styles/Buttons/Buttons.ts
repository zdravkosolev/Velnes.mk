import styled from "styled-components";
import { theme } from "../themeStyles";


const InitButton = styled.button`
  display: flex;
  align-items:center;
  justify-content:center;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  outline:none;
    &:focus{
      outline:none;
    }
    &:hover{
      opacity:0.8;
    }
`;

export const PrimaryButton = styled<any>(InitButton)`
    padding: 15px 24px 15px 24px;
    background-color: ${props => props.bg};   
    color: ${props => props.color};
    outline: 1px solid ${(props) => (props.color !== "false " ? props.color : "#E5E5E5")};
`;


export const IconLabelButton = styled<any>(InitButton)`
    padding:13px 16px 13px 12px;
    width: 138px;
    height: 50px;
    background-color: ${props => props.bg};   
    color: ${props => props.color};
    outline: 1px solid ${(props) => (props.color ? props.color : "#E5E5E5")};
`;

export const LabelIconButton = styled<any>(InitButton)`
padding:12px 12px 12px 16px;
background-color: ${props => props.bg};   
color: ${props => props.color};
outline: 1px solid ${(props) => (props.color !== "false " ? props.color : "#E5E5E5")};
`;

export const IconLabelIconButton = styled<any>(InitButton)`
padding:12px;
background-color: ${props => props.bg};   
color: ${props => props.color};
outline: 1px solid ${(props) => (props.color !== "false " ? props.color : "#E5E5E5")};
`;

export const IconButton = styled<any>(InitButton)`
padding:12px 16px 12px 16px;
background-color: ${props => props.bg};   
color: ${props => props.color};
outline:none;
border: none;
`

export const BottomBarButton = styled<any>(InitButton)`
width:390px;
padding:17px 24px 17px 24px;
background-color: ${props => props.bg};   
color: ${props => props.color};
outline: 1px solid ${(props) => (props.color !== "false " ? props.color : "#E5E5E5")};
`;

export const ALink = styled.a`
color: ${props => props.color};
font-size:${theme.typography.linkTextLarge.fontSize}px;
font-weight:${theme.typography.linkTextLarge.fontWeight};
text-decoration:underline;
&:hover{
  opacity: 0.8;
}
`

export const PrimaryButtonSM = styled<any>(InitButton)`
padding: 12px 16px;
    background-color: ${props => props.bg};   
    color: ${props => props.color};
    outline: 1px solid ${(props) => (props.color !== "false " ? props.color : "#E5E5E5")};
`;
export const PrimaryButtonFull = styled(PrimaryButtonSM)`
  color: ${(props) => props.color};
  background-color: ${(props) => props.bg};
  outline: 1px solid ${(props) => (props.outline ? props.outline : "#E5E5E5")};
  width: 100%;
  
  `

export const FilterOption = styled.button`
display: flex;
width: 100%;
padding: 16px 0px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 39px;
border: 2px solid ${(props) => (props.color !== "false " ? props.color : "#E5E5E5")};
background: #FFF;
`
export const DropdownButton = styled.select`
display: flex;
width: 135px;
height: 48px;
padding: 8px 15px;
justify-content: space-between;
align-items: center;
border-radius: 24px;
border: 1px solid #F2F2F2;
`

export const MapButton = styled.button`
display: inline-flex;
height: 46px;
padding: 12px 24px;
align-items: center;
gap: 10px;
border-radius: 52px;
color: #FFF;

background: ${(props) => props.color};
`