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
    marginBottom?: number
    marginTop?: number
    width?: number
}

export const Text = styled.p<IText>`
  text-align: ${props => props.textAlign || 'start'};
  font-size: ${props => props.size}px;
  font-weight: ${props => props.weight};
  color: ${props => props.color || themes.colors.primary};
  transition: color .3s linear;
  margin-bottom: ${props => props.marginBottom || 0}px;
  margin-top: ${props => props.marginTop || 0}px;
  width: ${props => props.width}px;
  &:hover{
    color: ${props => props.hover}
  }
`