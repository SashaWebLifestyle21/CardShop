import React from "react";
import styled from "styled-components";
import { themes } from "../../../constants/themes";

interface IText {
    children: React.ReactNode
    size?: number
    weight?: number
    textAlign?: string
    color?: string
    hover?: string
}

export const Text = styled.p<IText>`
  text-align: ${props => props.textAlign || 'centre'};
  font-size: ${props => props.size}px;
  font-weight: ${props => props.weight};
  color: ${props => props.color || themes.colors.primary};
  transition: color .3s linear;
  
  &:hover{
    color: ${props => props.hover}
  }
`