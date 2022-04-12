import React from 'react'
import styled from "styled-components";
import { themes } from "../../../constants/themes";

interface IButton {
    borderColor?: string
    backgroundColor?: string
    color?: string
    ptb?: string
    prl?: string
}

interface IButtonProps {
    children: React.ReactNode
    onClick?: any
    borderColor?: string
    backgroundColor?: string
    color?: string
}

const BUTTON = styled.button<IButton>`
  padding: ${props => props.ptb || 12}px ${props => props.prl || 20}px;
  display: block;
  border: none;
  border-color: ${props => props.borderColor || themes.colors.white};
  color: ${props => props.color || themes.colors.white};
  background-color: ${props => props.backgroundColor || 'transparent'};
  border-radius: 5px;
  cursor: pointer;
`

const Button = ({ children, onClick, borderColor, backgroundColor, color }: IButtonProps) => {
    return (
        <BUTTON borderColor={borderColor} backgroundColor={backgroundColor} color={color} onClick={onClick}>
            {children}
        </BUTTON>
    );
};

export default Button;