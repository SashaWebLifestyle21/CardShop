import React from "react";
import styled from "styled-components";
import { themes } from "../../../constants/themes";

interface IText {
    children: React.ReactNode
    size?: number
    weight?: number
    talign?: string
    color?: string
    hover?: string
}

const TEXT = styled.p<IText>`
  text-align: ${props => props.talign || 'centre'};
  font-size: ${props => props.size}px;
  font-weight: ${props => props.weight};
  color: ${props => props.color || themes.colors.primary};
  transition: color .3s linear;
`

const Text = ({ children, size, weight, talign, color, hover }: IText) => {
    return (
        <TEXT size={size} weight={weight} talign={talign} color={color} hover={hover}>{children}</TEXT>
    )
}

export default Text